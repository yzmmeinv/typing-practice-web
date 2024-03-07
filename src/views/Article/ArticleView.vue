<template>
  <div class="article">
    <div class="search">
      <a-card>
        <ArticleSearch @searchData="searchData" />
      </a-card>
    </div>
    <div class="list">
      <a-card>
        <ArticleSort @sortord="sortord" />
        <ArticleList :listData="listData" @pageData="pageData" />
      </a-card>
    </div>
  </div>
</template>
  
<script setup>
import ArticleList from '@/components/Article/ArticleList.vue';
import ArticleSearch from '@/components/Article/ArticleSearch.vue';
import ArticleSort from '@/components/Article/ArticleSort.vue';
import api from '../../api';
import { useStore } from 'vuex';
import { ref } from 'vue';
import utils from '../../api/utils/componentUtil';

const store = useStore();

const searchValue = ref({});
const sortordData = ref();
const page = ref({});

const starOrPackFlag = ref(0);
const searchData = (value, flag) => {
  if (starOrPackFlag.value !== 0) {
    if (value.title === '' && value.language === null && value.tagMask.length === 0) {
      starOrPackFlag.value = flag;
    } else {
      starOrPackFlag.value = 0;
      searchValue.value = value;
    }
  } else {
    if (JSON.stringify(searchValue.value) !== '{}' && flag !== 0) {
      searchValue.value = {};
      starOrPackFlag.value = flag;
    } else {
      searchValue.value = value;
      starOrPackFlag.value = flag;
    }
  }
  if (value.title === '' && value.language === null && value.tagMask.length === 0 && flag === 0) {
    searchValue.value = value;
    starOrPackFlag.value = 0;
  }
  search();
  console.log(111111111111);
};
const sortord = (value) => {
  sortordData.value = value;
  search();
  console.log(2222222);
};
const pageData = (value) => {
  page.value = value;
  search();
  console.log(333333333);
};

const listData = ref();
async function search() {
  try {
    let res = '';
    if (starOrPackFlag.value === 0) {
      res = await api.articleApi.search({
        title: searchValue.value.title,
        language: searchValue.value.language,
        tagMask: searchValue.value.tagMask,
        sortord: sortordData.value || 0,
        page: {
          pageSize: page.value.pageSize,
          pageNo: page.value.page
        }
      });
    } else if (starOrPackFlag.value === 1 || starOrPackFlag.value === 2) {
      res = await api.articleApi.starOrPack({
        userId: store.state.user.user.userId,
        type: starOrPackFlag.value,
        page: {
          pageSize: page.value.pageSize,
          pageNo: page.value.page
        }
      });
    } else if (starOrPackFlag.value === 3) {
      res = await api.articleApi.userIdList({
        userId: store.state.user.user.userId,
        page: {
          pageSize: page.value.pageSize,
          pageNo: page.value.page
        }
      });
    }
    if (res.data.success) {
      console.log(res);
      listData.value = res.data;
    } else {
      utils.tip(res.data.message, "error");
    }
  } catch (error) {
    console.error("Error during search:", error);
  }
}


// if (store.state.user.isLogin) {
//   search();
//   console.log(44444444);
// }
</script>
  
<style scoped>
.article {
  width: 90%;
  margin: 2rem auto;
  display: flex;
}

.search {
  flex: 1;
  margin-right: 1rem;
}

.search .ant-card-bordered {
  position: sticky;
  top: 4.3rem;
}

.list {
  flex: 3;
}
</style>
