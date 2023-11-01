<template>
  <div>
    <a-slider v-model:value="inputValue" :min="1" :max="20" />
    <a-input-number v-model:value="inputValue" :min="1" :max="20" style="margin-left: 16px" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
const inputValue = ref(1);
</script>
<style scoped>
</style>
