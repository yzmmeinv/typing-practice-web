/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import router from '../../router';
// import { useStore } from 'vuex';
import store from '../../store/index';
import baseUrl from '../base';
import utils from './componentUtil';


// const store = useStore();
// 环境的切换
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = baseUrl.devUrl;
} else if (process.env.NODE_ENV == 'debug') {
  axios.defaults.baseURL = baseUrl.devUrl;
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = baseUrl.prodUrl;
}

// 创建axios实例
var instance = axios.create({
  timeout: 1000 * 12,
});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
instance.interceptors.request.use(
  config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。

    const access = store.state.user.access;
    console.log("httpUtil:", access);
    access && (config.headers.ACCESS = access);
    return config;
  },
  error => Promise.error(error)
);

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => {
    console.log(res);
    if (!res.data.success) {
      console.log("请求失败");
      console.log(res.data.code);
      switch (res.data.code) {
        case '-10002':
          console.log("access过期。。。");
          // token过期,重新获取后请求
          // todo 刷新token
          store.dispatch('refreshAccess', {
            refresh: store.state.user.refresh
          }).then(refreshResponse => {
            console.log('令牌刷新成功', refreshResponse);
            // 重新发送请求
            return instance.request(res.config);
          })
            .catch(refreshError => {
              console.log('令牌刷新失败', refreshError);
              // 处理令牌刷新失败
              toLogin(); // 例如，跳转到登录页
            });
          break;
        // 如果返回refreshtoken也过期了, 跳转重新登录
        case "-10003":
          // 权限不足, 需要登录
          toLogin();
          break;
        default:
          // 弹框 将结果的message输出
          utils.tip(res.data.message, "error");
          return res;
      }
    }

    return res.status === 200 ? Promise.resolve(res) : Promise.reject(res);
  },
  // 请求失败
  error => {
    // if (error.response.status) {            
    // 	switch (error.response.status) {                
    // 		// 401: 未登录
    // 		// 未登录则跳转登录页面，并携带当前页面的路径
    // 		// 在登录成功后返回当前页面，这一步需要在登录页操作。                
    // 		case 401:                    
    // 			router.replace({                        
    // 				path: '/login',                        
    // 				query: { 
    // 					redirect: router.currentRoute.fullPath 
    // 				}
    // 			});
    // 			break;

    //     // 403 token过期
    //     // 登录过期对用户进行提示
    //     // 清除本地token和清空vuex中token对象
    //     // 跳转登录页面                
    //     case 403:
    //          tip({
    //             message: '登录过期，请重新登录',
    //             duration: 1000,
    //             forbidClick: true
    //         });
    //         // 清除token
    //         localStorage.removeItem('token');
    //         store.commit('loginSuccess', null);
    //         // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
    //         setTimeout(() => {                        
    //             router.replace({                            
    //                 path: '/login',                            
    //                 query: { 
    //                     redirect: router.currentRoute.fullPath 
    //                 }                        
    //             });                    
    //         }, 1000);                    
    //         break; 

    //     // 404请求不存在
    //     case 404:
    //         tip({
    //             message: '网络请求不存在',
    //             duration: 1500,
    //             forbidClick: true
    //         });
    //         break;
    //     // 其他错误，直接抛出错误提示
    //     default:
    //         tip({
    //             message: error.response.data.message,
    //             duration: 1500,
    //             forbidClick: true
    //         });
    // }
    // return Promise.reject(error.response);
    console.error(error);

    // 弹框 将结果的message输出
    utils.tip(error.message, "error");


    // 处理断网的情况
    // eg:请求超时或断网时，更新state的network状态
    // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
    // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
    // if (!window.navigator.onLine) {
    //   store.commit('changeNetwork', false);
    // } else {
    //   return Promise.reject(error);
    // }
    // return Promise.reject(error);
  }
  // }
);



/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
};

export default instance;
