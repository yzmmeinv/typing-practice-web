<template>
  <a-input-search v-model:value="value" placeholder="input search text" enter-button @search="onSearch" />
</template>


<script>
import { ref } from 'vue';
export default {
  name: 'ArticleSearch',
  components: {
  },
  setup() {
    const value = ref('');
    const onSearch = searchValue => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };
    return {
      value,
      onSearch,
    };
  }
};
</script>
