<template>
  <div class="list">
    <ArticleSearch />
    <ArticleList />
  </div>
</template>
  
<script>
import ArticleList from '../components/Article/ArticleList.vue';
import ArticleSearch from '../components/Article/ArticleSearch.vue';
export default {
  name: 'ArticleView',
  components: {
    ArticleList,
    ArticleSearch,
  }
};
</script>
  
<style scoped>
.list {
  width: 75%;
  margin: 5rem auto;
  border-top: 1px solid #F0F0F0;
}
</style>
