<template>
  <div class="beforePractice">
    <BeforePracticeView />
  </div>
  <div class="practicing">
    <PracticingView />
  </div>
  <div class="afterPractice">
    <AfterPracticeView />
  </div>
</template>
  
<script setup>
import BeforePracticeView from './BeforePracticeView.vue';
import PracticingView from './PracticingView.vue';
import AfterPracticeView from './AfterPracticeView.vue';
</script>
  
<style scoped>
.beforePractice {
  width: 40%;
  margin: 5rem auto;
}

.practicing {
  position: relative;
}
</style>
