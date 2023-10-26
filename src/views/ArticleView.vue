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
        <ArticleList :searchValue="searchValue" :sortordData="sortordData" />
      </a-card>
    </div>
  </div>
</template>
  
<script>
import ArticleList from '../components/Article/ArticleList.vue';
import ArticleSearch from '../components/Article/ArticleSearch.vue';
import ArticleSort from '../components/Article/ArticleSort.vue';
import { ref } from 'vue';
export default {
  name: 'ArticleView',
  components: {
    ArticleList,
    ArticleSearch,
    ArticleSort
  },
  setup() {
    const searchValue = ref({});
    const sortordData = ref();
    const searchData = (value) => {
      searchValue.value = value;
      console.log(searchValue.value);
    };
    const sortord = (value) => {
      sortordData.value = value;
    };
    return {
      searchData,
      sortord,
      searchValue,
      sortordData
    };
  }
};
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

.list {
  flex: 3;
}
</style>
