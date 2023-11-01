/**
 * 用户模块接口列表
 */

import axios from './utils/httpUtil'; // 导入http中创建的axios实例


const articleApi = {
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


  //搜索个人文章
  search(params) {
    return axios.post(`/article/search`, params);
  },
  //收藏文章
  star(params) {
    return axios.post(`/article/pack`, params, { headers: { 'Content-Type': 'application/form-data;charest=UTF-8' } });
  },
  //点赞文章
  like(params) {
    return axios.post(`/article/star`, params, { headers: { 'Content-Type': 'application/form-data;charest=UTF-8' } });
  },
  //获取文章详情
  desc(params) {
    return axios.get(`/article/desc?articleId=${params}`);
  },
  //增加文章浏览量
  view(params) {
    return axios.post(`/article/view?articleId=${params}`);
  },
};

export default articleApi;
