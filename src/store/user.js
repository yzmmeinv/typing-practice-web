import api from '../api/index.js';

const ModuleUser = {
  state: {
    user: null,// 用户的基本信息，可以设置为对象或 null
    access: localStorage.getItem('access') || null,// 当前用户的 token，可以设置为字符串或 null
    refresh: localStorage.getItem('refresh') || null,
    status: 1,
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
      state.user = user;
    },
    setAccess(state, access) {
      state.access = access;
    },
    setRefresh(state, refresh) {
      state.refresh = refresh;
    },
    logout(state) {
      state.user = null;
      state.access = null;
      state.refresh = null;
    },
    setStatus(state, value) {
      state.status = value;
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
        console.log(res);
        if (res.data.success) {
          context.commit("setAccess", res.data.access);
          context.commit("setRefresh", res.data.refresh);
          data.success();
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
        console.log(res);
        if (res.data.success) {
          context.commit("setAccess", res.data.access);
          context.commit("setRefresh", res.data.refresh);
          data.success();
        } else {
          data.error(res);
        }
        // 执行某些操作
      });
    },
    getinfo(context, data) {
      api.userApi.getInfo({

      }).then(res => {
        if (res.data.success) {
          context.commit("setUser", res.data);
          data.success(res);
        } else {
          data.error(res);
        }

      });
      // $.ajax({
      //   url: "http://127.0.0.1:3000/api/user/account/info/",
      //   type: "GET",
      //   headers: {
      //     'Authorization': "Bearer " + context.state.token,
      //   },
      //   success(resp) {
      //     if (resp.error_message === "success") {
      //       context.commit("updateUser", {
      //         ...resp,
      //         is_login: true,
      //       });
      //       data.success(resp);
      //     } else {
      //       data.error(resp);
      //     }
      //   },
      //   error(resp) {
      //     data.error(resp);
      //   }
      // });
    },
    logout(context) {
      localStorage.removeItem("jwt_token");
      context.commit("logout");
    },
  },
  modules: {
    // 可以添加其他模块
  }
};
export default ModuleUser;
