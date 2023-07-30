<template>
    <a-card title="欢迎登录" class="card">
      <a-form id="components-form-demo-normal-login" class="login-form">
        <a-form-item>
          <a-input v-model:value="email" type="email" placeholder="邮箱"></a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="password" type="password" placeholder="密码"></a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox>记住密码</a-checkbox>
          <a-button type="primary" class="login-form-button" @click="login">登录</a-button>
        </a-form-item>
        <div class="menu">
          <a class="login-form-forgot" href="">忘记密码</a>
          <a class="login-form-revise" href="">修改密码</a>
          <a class="login-form-captcha" href="">验证码登录</a>
          <a class="login-form-register" href="">注册账号</a>
        </div>
      </a-form>
    </a-card>
</template>
  
<script>
import { ref } from 'vue';
import { useStore } from 'vuex'
import router from "@/router/index";
// import api from '../api/index.js';
export default {
  name: 'LoginView',
  components: {
  },
  setup() {
    const store = useStore();

    let email = ref('');
    let password = ref('');
    
    const login = () => {
      // 字符校验
      store.dispatch("login",{
        email: email.value,
        password: password.value,
        success() {
          // store.dispatch("getinfo",{
            // success() {
              router.push({ name: 'home' });
            // },
            // error() {
            //   console.log("获取用户失败,请重新输入");
            // }
          // ) 
        }, 
        error(e) {
          console.error("登录报错：", e)
        }
      })
    }
    return{
      email,
      password,
      login,
    }
  }
}
</script>

<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
a {
  color: grey;
  text-decoration: none;
}
.card {
  width: 30rem;
  margin: 1.25rem auto;
}
#components-form-demo-normal-login .menu {
  display: flex;
  justify-content: space-between;
}
</style>
