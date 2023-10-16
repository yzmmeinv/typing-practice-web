/**
 * 用户模块接口列表
 */

import axios from './utils/httpUtil'; // 导入http中创建的axios实例
import store from '../store/index';


const userApi = {
  // 新闻列表    
  // articleList () {        
  // 	return axios.get(`${base.sq}/topics`);    
  // },    
  // 新闻详情,演示    
  // articleDetail (id, params) {        
  // 	return axios.get(`${base.sq}/topic/${id}`, {            
  // 		params: params        
  // 	});    
  // },
  // post提交    
  // login (params) {        
  // 	return axios.post(`${base.sq}/api/user/login`, qs.stringify(params));    
  // }
  // 其他接口…………

  // 账密登录
  login(params) {
    return axios.post(`/user/login`, params);
  },
  // 获取用户信息
  getInfo(id) {
    if (id) {
      return axios.get(`/user/getInfo?id=${id}`);
    } else {
      return axios.get(`/user/getInfo`);
    }
  },
  // 验证码登录
  loginByYzm(params) {
    return axios.post(`/user/loginByYzm`, params);
  },
  // 注册
  register(params) {
    return axios.post(`/user/account/register`, params);
  },
  //忘记密码
  forgetPassword(params) {
    return axios.post(`/user/password/forget`, params);
  },
  // 刷新access
  refreshAccess() {
    return axios.post('/user/refresh', {}, { headers: { 'REFRESH': store.state.user.refresh } });
  }
};

export default userApi;
