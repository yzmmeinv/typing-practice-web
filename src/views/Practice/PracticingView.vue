<template>
  <a-card>
    文章进度
    <a-progress :stroke-color="{
      '0%': '#108ee9',
      '100%': '#87d068',
    }" :percent=defaultPercent />
    <div>
      <span>文章名</span>
      <span>字数：100</span>
    </div>
  </a-card>
  <div class="other">
    旁边的
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
const defaultPercent = ref(5);
</script>
  
<style scoped>
.other {
  width: 12%;
  height: 25rem;
  position: absolute;
  top: 2rem;
  right: 1rem;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 1.25rem;
  box-sizing: border-box;
}

.ant-card {
  width: 70%;
  margin: 1rem auto;
}
</style>
