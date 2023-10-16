<template>
  <div class="menu-container">
    <a-menu mode="horizontal">
      <li>
        <a-menu-item key="home">
          <router-link :to="{ name: 'home' }">首页</router-link>
        </a-menu-item>
        <a-menu-item key="article">
          <router-link :to="{ name: 'article' }">文章管理</router-link>
        </a-menu-item>
        <a-menu-item key="practice">
          <router-link :to="{ name: 'practice' }">练习</router-link>
        </a-menu-item>
        <a-menu-item key="test">
          <router-link :to="{ name: 'test' }">测试</router-link>
        </a-menu-item>
        <a-menu-item key="list">
          <router-link :to="{ name: 'list' }">排行榜</router-link>
        </a-menu-item>
        <a-menu-item key="other">
          <router-link :to="{ name: 'other' }">其他</router-link>
        </a-menu-item>
      </li>
      <li v-if="!loginStatus">
        <a-menu-item key="login">
          <router-link :to="{ name: 'login' }">登录</router-link>
        </a-menu-item>
      </li>
      <li v-else>
        <a-menu-item key="user">
          <router-link :to="{ name: 'user' }">
            <a-badge dot>
              <a-avatar :src="store.state.user.user.avatar">
              </a-avatar>
            </a-badge>
          </router-link>
        </a-menu-item>
      </li>
    </a-menu>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  setup() {
    const current = ref(['mail']);
    const store = useStore();
    const loginStatus = computed(() => store.state.user.isLogin);
    return {
      current,
      loginStatus,
      store,
    };
  },
};
</script>

<style scoped>
* {
  text-decoration: none;
}

.ant-menu-overflow>li:nth-child(2) {
  position: absolute;
  right: 0;
}
</style>

