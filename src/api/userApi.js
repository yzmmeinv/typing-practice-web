/**
 * article模块接口列表
 */

import axios from './utils/httpUtil'; // 导入http中创建的axios实例


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

  login(params) {
    return axios.post(`/user/login`, params);
  },
  getInfo(params) {
    return axios.post(`/user/getInfo`, params);
  },
  loginByYzm(params) {
    return axios.post(`/user/loginByYzm`, params);
  }
};

export default userApi;


// import service from "../../utils/httpUtil";
// export default function api(method, url, data) {
//     return service({
//         method: method,
//         url: url,
//         data: {
//           email: data.email,
//           password: data.password
//         }
//     })
// }
