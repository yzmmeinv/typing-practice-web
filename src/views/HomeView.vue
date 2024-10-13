<template>
  <!-- <div class="full-page">
    <img :src="url" class="background-image" alt="Background Image" />
  </div> -->
  <img src="https://v1.jinrishici.com/all.svg">


  <!-- 名言：https://v1.hitokoto.cn/ -->

  <!-- Bing首页图：https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1 -->

  <!-- 音乐：https://music.aityp.com/playlist/detail?id=145787433

// 详细接口文档见：https://binaryify.github.io/NeteaseCloudMusicApi
内容过多不便展示 -->

  <!-- 网易云评论：https://api.comments.h -->
  <!-- <h1>这里是首页</h1> -->
</template>

<script setup>


import { proxyAxios } from '../api/utils/httpUtil';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const data = ref();
const url = ref()


const fetchImage = () => {
  proxyAxios
    .get('/bing/HPImageArchive.aspx?format=js&idx=0&n=1') // 替换为你的 API URL
    .then(response => {
      // console.log(response.data)
      data.value = response.data.images[0].url
      // console.log(data.value)
      url.value = `https://cn.bing.com/${data.value}`;

      document.body.style.backgroundImage = `url(${url.value})`;
      document.body.style.backgroundSize = 'cover';    // 填充整个区域
      document.body.style.backgroundPosition = 'center'; // 居中显示
      document.body.style.overflow = 'hidden';         // 隐藏滚动条

      // 设置初始透明度为 0
      document.body.style.opacity = '0';

      // 延迟后将透明度设置为 1
      setTimeout(() => {
        document.body.style.transition = 'opacity 10s ease-in-out'; // 设置过渡效果
        document.body.style.opacity = '1'; // 渐变到完全显示
      }, 100);  // 延迟时间，以确保背景图片加载
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

onMounted(() => {
  fetchImage();
});

// 在组件卸载前清理样式
onBeforeUnmount(() => {
  document.body.style.backgroundImage = '';
  document.body.style.backgroundSize = '';
  document.body.style.backgroundPosition = '';
  document.body.style.overflow = '';
});
</script>

<style scoped>
.full-page {
  position: absolute;
  /* 为绝对定位的子元素提供参考 */
  height: 100vh;
  /* 视口高度 */
  width: 100vw;
  /* 视口宽度 */
  overflow: hidden;
  z-index: -999;
  /* 隐藏滚动条 */
}

.background-image {
  position: absolute;
  top: 50%;
  /* 垂直居中 */
  left: 50%;
  /* 水平居中 */
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 保持纵横比，填充整个区域 */
  transform: translate(-50%, -50%);
}
</style>
