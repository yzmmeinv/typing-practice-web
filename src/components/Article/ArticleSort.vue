<template>
  <span>
    排列方式：
  </span>
  <a-space>
    <a-select ref="select" v-model:value="value" style="width: 120px" :options="options1" @focus="focus"
      @change="handleChange"></a-select>
  </a-space>
</template>
<script setup>
import { ref } from 'vue';
const value = ref('lucy');
const options1 = ref([
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
  {
    value: 'yiminghe',
    label: 'Yiminghe',
  },
]);
const focus = () => {
  console.log('focus');
};
const handleChange = value => {
  console.log(`selected ${value}`);
};
</script>

<style scoped>
* {
  user-select: none;
}
</style>
