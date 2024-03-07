<template>
  <ArticleList :listData="listData" @pageData="pageData" />
</template>
  
<script setup>
import ArticleList from '@/components/Article/ArticleList.vue';
import api from '../../api';
import { useStore } from 'vuex';
import { ref } from 'vue';
import utils from '../../api/utils/componentUtil';

const store = useStore();
const page = ref({});
const listData = ref();
const pageData = (value) => {
  page.value = value;
  search();
};

const search = () => {
  api.articleApi.userIdList({
    userId: store.state.user.user.userId,
    page: {
      pageSize: page.value.pageSize,
      pageNo: page.value.page
    }
  }).then(res => {
    if (res.data.success) {
      console.log(res);
      listData.value = res.data;
    } else {
      utils.tip(res.data.message, "error");
    }
  });
};
</script>

<style scoped>
</style>
