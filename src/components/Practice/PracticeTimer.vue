<template>
  <div>
    <span>{{ formatTime(countdown) }}</span>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, onBeforeUnmount, defineEmits, defineExpose, watch } from 'vue';

const props = defineProps({
  selectedTimeRange: Number,
  practiceContent: String,
});
const countdown = ref(props.selectedTimeRange * 60 - 1);// 初始倒计时时间，以秒为单位
const timer = ref();// 存储定时器的引用
const emit = defineEmits(['onFinish']);
const value2 = ref(''); // 输入框的内容
const typingSpeed = ref(0); // 平均输入速度
const timeSpeedArray = ref([]);//图表对象
let elapsedTime = 1;

onMounted(() => {
  value2.value = props.practiceContent;
  startCountdown();
});
watch(() => props.practiceContent, (newValue) => {
  value2.value = newValue;
});
const startCountdown = () => {
  const timeSpeedObj = {
    time: 0, // 或者你想要存入的时间值
    speed: 0
  };
  // 将对象存入数组
  // 这里假设你有一个名为 timeSpeedArray 的 ref，用于存储时间和速度的数组
  timeSpeedArray.value.push(timeSpeedObj);
  timer.value = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
      elapsedTime++;

      calculateTypingSpeed(); // 每秒更新一次输入速度
      emit('onFinish', typingSpeed.value, timeSpeedArray.value);
    } else {
      stopCountdown();
    }
  }, 1000); // 每秒更新一次倒计时
};
const addPointEcharts = (time, speed) => {
  timeSpeedArray.value.push({
    time: time, // 或者你想要存入的时间值
    speed: speed
  });
};
const stopCountdown = () => {
  clearInterval(timer.value);
  timer.value = null;
  // 倒计时结束时执行一定操作
  if (timeSpeedArray.value[timeSpeedArray.value.length - 1].time !== elapsedTime) {
    addPointEcharts(elapsedTime, typingSpeed.value);
  }
  // 将对象存入数组
  // 这里假设你有一个名为 timeSpeedArray 的 ref，用于存储时间和速度的数组

  emit('onFinish');
};
const calculateTypingSpeed = () => {
  const typedCharacters = value2.value.length;
  let typingSpeeds = 0;
  // 计算输入速度（字符/分钟）
  typingSpeeds = parseInt((typedCharacters / elapsedTime) * 60);

  if (elapsedTime % 3 === 0) {
    // 更新输入速度
    addPointEcharts(elapsedTime, typingSpeeds);
  }

  typingSpeed.value = typingSpeeds;
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes} 分 ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds} 秒`;
};

onBeforeUnmount(() => {
  clearInterval(timer.value);
  timer.value = null;
});

defineExpose({
  stopCountdown,
});
</script>
