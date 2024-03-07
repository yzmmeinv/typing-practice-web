<template>
  <div>
    <div class="article">
      <p v-for="(word, index) in article" :key="index" :class="{ error: hasError(index) }">{{ word }}</p>
    </div>
    <textarea v-model="userInput" @input="handleInput" :disabled="timer <= 0"></textarea>
    <div v-if="timer > 0">剩余时间：{{ timer }} 秒</div>
    <div v-else>打字完成！速度：{{ speed }} 字/分钟，准确率：{{ accuracy }}%</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: "这是一段需要打字的文章...",
      userInput: "",
      timer: 60,
      startTime: 0,
      endTime: 0,
    };
  },
  computed: {
    totalTime() {
      return (this.endTime - this.startTime) / 1000 / 60; // 转换成分钟
    },
    speed() {
      return Math.round((this.article.length / this.totalTime) * 60);
    },
    accuracy() {
      const correctCount = this.article.split("").filter((char, index) => char === this.userInput[index]).length;
      return ((correctCount / this.article.length) * 100).toFixed(2);
    },
  },
  methods: {
    handleInput() {
      if (this.timer <= 0) {
        return;
      }

      this.endTime = Date.now();

      if (this.userInput === this.article) {
        // 用户输入完整，结束计时
        this.timer = 0;
      }
    },
    hasError(index) {
      return this.userInput[index] !== this.article[index];
    },
    startTimer() {
      this.startTime = Date.now();
      const interval = setInterval(() => {
        this.timer--;
        if (this.timer <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
