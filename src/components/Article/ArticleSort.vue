<template>
  <span>
    排列方式：
  </span>
  <a-space>
    <a-select ref="select" v-model:value="value" style="width: 120px" :options="options1"
      @change="handleChange"></a-select>
  </a-space>
</template>
<script setup>
import { ref } from 'vue';

const sortord = ref(0);

const emit = defineEmits(['sortord']);
const ziChuanFu = () => {
  emit('sortord', sortord.value);
};
const value = ref('名称');
const options1 = ref([
  {
    value: 0,
    label: '名称',
  },
  {
    value: 1,
    label: '最新',
  },
  {
    value: 2,
    label: '最热',
  },
]);
const handleChange = value => {
  console.log(`selected ${value}`);
  sortord.value = value;
  ziChuanFu();
};
</script>

<style scoped>
* {
  user-select: none;
}
</style>
