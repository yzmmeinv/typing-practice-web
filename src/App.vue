<template>
  <a-config-provider :locale="locale">
    <NavBar />
    <router-view />
  </a-config-provider>
</template>


<script>
import NavBar from "./components/NavBar.vue";
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      locale: zhCN,
    };
  },
};
</script>


<style scoped>
</style>
