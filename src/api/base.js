/**
import baseUrl from './base';
 * 接口域名的管理
 */
let baseUrl;

if (process.env.NODE_ENV == 'development') {
  baseUrl = {
    httpUrl: 'http://localhost:3000/api',
    wsUrl: 'ws://localhost:3333/ws'
  };
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = {
    httpUrl: 'https://totry.vip/api',
    wsUrl: 'wss://totry.vip/ws'
  };
}


export default baseUrl;
