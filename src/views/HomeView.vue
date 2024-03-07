<template>
  <div>这里是首页</div>
  <div>
    <ECharts :data="chartData1" />
  </div>
</template>

<script setup>
import ECharts from '@/components/ECharts.vue';
const chartData1 = {
  xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  seriesData: [120, 200, 150, 80, 70, 110, 130]
};
</script>

<style scoped>
</style>
