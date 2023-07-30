<template>
    <a-card title="欢迎注册" class="card">
        <a-form id="components-form-demo-normal-login" class="login-form">
          <a-form-item>
            <a-input type="email" placeholder="邮箱"></a-input>
          </a-form-item>
          <a-form-item>
            <a-input type="password" placeholder="密码"></a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox>记住密码</a-checkbox>
            <a class="login-form-forgot" href="">忘记密码</a>
            <a-button type="primary" class="login-form-button">登录</a-button>
          </a-form-item>
        </a-form>
      </a-card>
  </template>
  
  <script>
  
  export default {
    name: 'RegisterView',
    components: {
    }
  }
  </script>
  
  <style scoped>
    #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
  .card {
    width: 30rem;
    margin: 1.25rem auto;
  }
  </style>