<template>
  <div class="menu-container">
    <a-menu mode="horizontal">
        <a-menu-item key="home">
          <router-link :to="{name: 'home'}">首页</router-link>
        </a-menu-item>
        <a-menu-item key="article">
          <router-link :to="{name: 'article'}">文章管理</router-link>
        </a-menu-item>
        <a-menu-item key="practice">
          <router-link :to="{name: 'practice'}">练习</router-link>
        </a-menu-item>
        <a-menu-item key="test">
          <router-link :to="{name: 'test'}">测试</router-link>
        </a-menu-item>
        <a-menu-item key="list">
          <router-link :to="{name: 'list'}">排行榜</router-link>
        </a-menu-item>
        <a-menu-item key="other">
          <router-link :to="{name: 'other'}">其他</router-link>
        </a-menu-item>
    </a-menu>
    <a-menu mode="horizontal">
        <a-menu-item key="input" disabled>
          <a-input-search placeholder="input search text" style="width: 300px" class="search"/>
        </a-menu-item>
        <a-menu-item key="login">
          <router-link :to="{name: 'login'}">登录</router-link>
        </a-menu-item>
        <a-menu-item key="register">
          <router-link :to="{name: 'register'}">注册</router-link>
        </a-menu-item>
     </a-menu> 
  </div>
</template>

<script>
import {ref } from 'vue';
export default{
  setup() {
    const current = ref(['mail']);
    return {
      current,
    };
  },

  components: {
  },
};
</script>

<style scoped>
* {
 text-decoration: none;
}
.menu-container {
  display: flex;
  justify-content: space-between;
}
.search {
  margin-top: 0.45rem;
}
</style>