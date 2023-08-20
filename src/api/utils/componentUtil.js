
import { notification } from 'ant-design-vue';
const utils = {
  /** 
   * 提示函数 
   * 禁止点击蒙层、显示一秒后关闭
   */
  tip(msg, type) {
    notification[type]({
      message: msg,
      showIcon: true
    });
  },

};
export default utils;
