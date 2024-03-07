/**
 *通用模块api
 */

import axios from './utils/httpUtil'; // 导入http中创建的axios实例


const baseApi = {
  getYzm(params) {
    return axios.post(`/base/get/yzm`, params);
  },
  getDictionary(name) {
    return axios.get(`/dict/getDictionary?name=${name}`);
  },
};

export default baseApi;
