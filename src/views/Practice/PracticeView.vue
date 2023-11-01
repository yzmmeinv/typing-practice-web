<template>
  <div class="beforePractice">
    <BeforePracticeView />
  </div>

  <PracticingView />
  <AfterPracticeView />
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
</style>
