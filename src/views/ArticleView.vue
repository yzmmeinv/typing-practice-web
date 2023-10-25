<template>
  <div class="article">
    <div class="search">
      <a-card>
        <ArticleSearch />
      </a-card>
    </div>
    <div class="list">
      <a-card>
        <ArticleSort />
        <ArticleList />
      </a-card>
    </div>
  </div>
</template>
  
<script>
import ArticleList from '../components/Article/ArticleList.vue';
import ArticleSearch from '../components/Article/ArticleSearch.vue';
import ArticleSort from '../components/Article/ArticleSort.vue';
export default {
  name: 'ArticleView',
  components: {
    ArticleList,
    ArticleSearch,
    ArticleSort
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
