<template>
  <a-card title="欢迎登录" class="card">
    <a-form
      :model="formState"
      v-bind="layout"
      name="nest-messages"
      :validate-messages="validateMessages"
      >
      <a-form-item :name="['user', 'email']" label="邮箱" :rules="[{ type: 'email', required: true }]">
        <a-input v-model:value="formState.user.email" placeholder="邮箱" />
      </a-form-item>
      <a-form-item :name="['user', 'password']" label="密码" :rules="[{ required: true }]" v-if="status">
        <a-input-password v-model:value="formState.user.password" placeholder="密码"></a-input-password>
      </a-form-item>

      <a-form-item :name="['user', 'code']" label="验证码" :rules="[{ required: true }]" v-if="!status" >
        <a-input v-model:value="formState.user.code" placeholder="验证码"></a-input>


        <a-button v-if="!formState.user.countingDown" @click="getYzm">
          获取验证码
        </a-button>
        <a-button v-else disabled>
          {{ formState.user.countDown }}s 后重试
        </a-button>
      </a-form-item>

      <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }" style="margin-top: 2rem;">
        <a-button type="primary" ghost html-type="submit" @click="login" class="login-form-button">登录</a-button>
      </a-form-item>
      <a class="login-form-code" href="#" v-if="status" @click="loginByYzm">验证码登录</a>
      <a class="login-form-code" href="#" v-if="!status" @click="loginByYzm">密码登录</a>
      <a class="login-form-forgot" href="#">忘记密码?</a>
    </a-form>
  </a-card>
</template>
  
<script>
import { ref } from 'vue';
import { reactive } from 'vue';
import { useStore } from 'vuex'
import router from "@/router/index";
import { message } from 'ant-design-vue';
import api from '../api/index.js';
import utils from '../api/utils/componentUtil';

export default {
  name: 'LoginView',
  components: {
  },
  setup() {
    let store = useStore();
    let status = ref(1);
    
    const formState = reactive({
      user: {
        email: '',
        password: '',
        code: '',
        countingDown: false,
        countDown: 60,
      },
    });

    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };

    const validateMessages = {
      required: '${label}不能为空！',
      types: {
        email: '${label}格式不正确！',
      },
    };

    const loginByYzm = () => {
      if (status.value === 1) {
        status.value = 0//改为验证码状态
      }else {
        status.value = 1//改为密码状态
      }
    }
    
    const login = () => {
      if(formState.user.email === '') {
        return
      }
      if (status.value === 1) {
        // 字符校验
        if (formState.user.password === '' || formState.user.password.length > 16 || formState.user.password.length < 8) {
          utils.tip('密码错误', "error");
          return;
        }
      store.dispatch("login",{
        email: formState.user.email,
        password: formState.user.password,
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
      } else {
        if (formState.user.code.length === '') {
          utils.tip('请输入验证码', "error");
          return
        }
        store.dispatch("loginByYzm",{
        email: formState.user.email,
        verifyCode: formState.user.code,
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
    }

    const handleGetCode = () => {
      // 假设此处为发送获取验证码的请求逻辑
      // 此处使用 setTimeout 模拟请求，实际使用时请替换为实际的请求
      if (formState.user.email) {
        formState.user.countingDown = true;
        let count = formState.user.countDown;
        const timer = setInterval(() => {
          count--;
          if (count === 0) {
            clearInterval(timer);
            formState.user.countingDown = false;
            formState.user.countDown = 60;
            return;
          }
          formState.user.countDown = count;
        }, 1000);

        // 显示成功提示信息
        message.success('验证码已发送，请注意查收！');
      } else {
        // 如果邮箱为空，显示错误提示信息
        message.error('请输入邮箱地址');
      }
    };
    //获取验证码
    const getYzm = () => {
      handleGetCode();
      api.baseApi.getYzm({
        email: formState.user.email,
        channel: "login",
      })
    }
    return{
      login,
      loginByYzm,
      getYzm,
      store,
      formState,
      layout,
      validateMessages,
      status,
    }
  }
}
</script>

<style scoped>
a {
  color: grey;
  text-decoration: none;
}
.card {
  width: 30rem;
  margin: 1.25rem auto;
}
.login-form-button {
  width: 9.375rem;
}
.login-form-forgot {
  float: right;
}
#nest-messages_user_code {
  width: 11.5rem;
}
</style>
