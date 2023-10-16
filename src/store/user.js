import api from '../api/index.js';

const ModuleUser = {
  state: {
    user: {
      userId: null,
      email: "",
      phone: "",
      nickName: "",
      avatar: "",
      address: "",
      ip: "",
      location: "",
      gender: 1,
      bio: "",
      flags: 0,
      lastLoginTime: "",
      updateTime: "",
    },// 用户的基本信息，可以设置为对象或 null
    access: localStorage.getItem('access') || null,// 当前用户的 token，可以设置为字符串或 null
    refresh: localStorage.getItem('refresh') || null,
    status: 1,
    isLogin: localStorage.getItem('isLogin') || null,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getAccess(state) {
      return state.access;
    },
    getRefresh(state) {
      return state.refresh;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user.data;
      console.log(state.user.avatar);
    },
    setAccess(state, access) {
      state.access = access;
      localStorage.setItem('access', access);
    },
    setRefresh(state, refresh) {
      state.refresh = refresh;
      localStorage.setItem('refresh', refresh);
    },
    logout(state) {
      state.user = null;
      state.access = null;
      state.refresh = null;
    },
    setStatus(state, value) {
      state.status = value;
    },
    setIsLogin(state, value) {
      state.isLogin = value;
      localStorage.setItem('isLogin', value);
    }
  },
  actions: {
    // 在 actions 中可以定义一些异步操作，例如获取用户信息并调用 mutations 中的方法进行状态更新
    // fetchUserInfo({ commit }) {
    //   // 模拟异步操作获取用户信息
    //   const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
    //   const token = 'example-token';

    //   // 在异步操作完成后，调用 mutations 中的方法更新状态
    //   commit('setUser', user);
    //   commit('setToken', token);
    // },

    login(context, data) {
      api.userApi.login({
        email: data.email,
        password: data.password,
      }).then(res => {
        if (res.data.success) {
          // 存储数据到localStorage
          localStorage.setItem('access', res.data.data.access);
          localStorage.setItem('refresh', res.data.data.refresh);
          context.commit("setAccess", res.data.data.access);
          context.commit("setRefresh", res.data.data.refresh);
          context.commit("setIsLogin", true);
          data.success();

          context.dispatch("getinfo", {
            // id: data.userId, // 传入用户ID或其他必要参数
            success: () => {
              // 在获取用户信息成功后执行的操作
              console.log("获取用户信息成功");
            },
            error: (errorRes) => {
              // 在获取用户信息失败后执行的操作
              console.error("获取用户信息失败：", errorRes);
            }
          });
        } else {
          data.error(res);
        }
        // 执行某些操作
      });
    },
    loginByYzm(context, data) {
      api.userApi.login({
        email: data.email,
        password: data.password,
      }).then(res => {
        if (res.data.success) {
          localStorage.setItem('access', res.data.data.access);
          localStorage.setItem('refresh', res.data.data.refresh);
          context.commit("setAccess", res.data.data.access);
          context.commit("setRefresh", res.data.data.refresh);
          context.commit("setIsLogin", true);
          data.success();
          context.dispatch("getinfo", {
            // id: data.userId, // 传入用户ID或其他必要参数
            success: () => {
              // 在获取用户信息成功后执行的操作
              console.log("获取用户信息成功");
            },
            error: (errorRes) => {
              // 在获取用户信息失败后执行的操作
              console.error("获取用户信息失败：", errorRes);
            }
          });
        } else {
          data.error(res);
        }
        // 执行某些操作
      });
    },
    getinfo(context, data) {
      api.userApi.getInfo()
        .then(res => {
          console.log("获取用户信息：", res);
          if (res.data.success) {
            context.commit("setUser", res.data);
            data.success(res);
          } else {
            data.error(res);
          }
        });

    },
    logout(context) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      context.commit("logout");
    },
    register(context, data) {
      api.userApi.register({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        verifyCode: data.code,
      }).then(res => {
        if (res.data.success) {
          localStorage.setItem('access', res.data.data.access);
          localStorage.setItem('refresh', res.data.data.refresh);
          context.commit("setAccess", res.data.data.access);
          context.commit("setRefresh", res.data.data.refresh);
          context.commit("setIsLogin", true);
          data.success();
          context.dispatch("getinfo", {
            // id: data.userId, // 传入用户ID或其他必要参数
            success: () => {
              // 在获取用户信息成功后执行的操作
              console.log("获取用户信息成功");
            },
            error: (errorRes) => {
              // 在获取用户信息失败后执行的操作
              console.error("获取用户信息失败：", errorRes);
            }
          });
        } else {
          data.error(res);
        }
        // 执行某些操作
      });
    },
    refreshAccess(context, data) {
      return new Promise((resolve, reject) => {
        api.userApi.refreshAccess(data.refresh).then(res => {
          if (res.data.success) {
            localStorage.setItem('access', res.data.data.access);
            localStorage.setItem('refresh', res.data.data.refresh);
            context.commit("setAccess", res.data.data.access);
            context.commit("setRefresh", res.data.data.refresh);
            resolve(res); // 刷新成功，将成功的响应传递给调用者
          } else {
            reject(res); // 刷新失败，将失败的响应传递给调用者
          }
        });
      });
    },
  },
  modules: {
    // 可以添加其他模块
  }
};
export default ModuleUser;
