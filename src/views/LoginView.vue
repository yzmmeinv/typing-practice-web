<template>
  <LoginComponent v-if="flag === 0" @forgetButton='forgetButton' @registerButton="registerButton" />
  <RegisterComponent v-else-if="flag === 1" @loginButton="loginButton" />
  <ForgetPasswordComponent v-else-if="flag === 2" @loginButton="loginButton" />
</template>
  
<script>
import LoginComponent from '../components/Login/LoginComponent.vue';
import RegisterComponent from '../components/Login/RegisterComponent.vue';
import ForgetPasswordComponent from '../components/Login/ForgetPassword.vue';
import { ref } from 'vue';

export default {
  name: 'LoginView',
  components: {
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
  },
  setup() {
    let flag = ref(0); //0为登录页面 1为注册页面 2为忘记密码页面
    const forgetButton = () => {
      flag.value = 2;
    };
    const registerButton = () => {
      flag.value = 1;
    };
    const loginButton = () => {
      flag.value = 0;
    };
    return {
      flag,
      forgetButton,
      registerButton,
      loginButton,
    };
  }
};
</script>

<style scoped>
</style>
