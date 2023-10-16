<template>
  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <a-layout>
      <a-layout-header :style="headerStyle">
        <a-row>
          <a-col :span="17">
            <span class="title">{{ detail.title }}</span>
          </a-col>
          <a-col :span="7">
            <a-button>去练习</a-button>
            <a-button>创建比赛</a-button>
            <a-button>去修改</a-button>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <div class="info">
              <span>
                <a-avatar :src="detail.avatar"></a-avatar>
                {{ detail.authorName }}
              </span>
              <span>
                {{ detail.updateTime }}
              </span>
              <span>
                字数：{{ detail.wordNums }}
              </span>
              <span>
                分类：{{ detail.tags }}
              </span>
            </div>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content :style="contentStyle">
        <!-- {{ detail.content }} -->
        <a-row>
          <a-col :span="1">
            <div class="star">
              <div>
                <StarOutlined /> <br>
                {{ detail.packs }}
              </div>
              <div>
                <LikeOutlined /> <br>
                {{ detail.stars }}
              </div>
            </div>
          </a-col>
          <a-col :span="18">
            <p class="height-50">{{ detail.content }}</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="18" :offset="1">
            <div class="explain">
              声明：以上文章均为用户自行添加，仅供打字交流使用，不代表本站观点，本站不承担任何法律责任，特此声明！如果有侵犯到您的权利，请及时联系我们删除。
            </div>
          </a-col>
        </a-row>
      </a-layout-content>
      <a-layout-footer :style="footerStyle">
        <a-row>
          <a-col :span="20">
            <ArticleComment />
          </a-col>
        </a-row>
      </a-layout-footer>
    </a-layout>
  </a-space>
</template>
  
<script setup>
import { StarOutlined, LikeOutlined } from '@ant-design/icons-vue';
import ArticleComment from '../components/Article/ArticleComment.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import api from '../api';

const route = useRoute();
const detail = ref({});

if (route.params.articleId) {
  api.articleApi.desc(route.params.articleId).then(res => {
    detail.value = res.data.data;
    console.log(detail.value);
  });
}

const headerStyle = {
  textAlign: 'initial',
  height: 'auto',
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'transparent',
};
const contentStyle = {
  textAlign: 'initial',
  minHeight: 120,
  lineHeight: '40px',
  backgroundColor: 'transparent',
};
const footerStyle = {
  textAlign: 'initial',
  color: '#fff',
  backgroundColor: 'transparent',
};
</script>
  
<style scoped>
.css-dev-only-do-not-override-hkh161 .title {
  font-size: 24px;
  font-weight: 800;
}

:where(.css-dev-only-do-not-override-hkh161).ant-layout {
  background-color: #fff;
}

.height-50 {
  padding: 1.5rem 2rem;
  margin: 0;
  background-color: rgb(235, 235, 235);
  border-radius: 1.8rem;
  max-height: 32rem;
  min-height: 15rem;
  overflow: auto;
}

.info span {
  margin-right: 1.2rem;
}

.info .ant-avatar {
  margin: 0;
}

.star {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.explain {
  font-size: 12px;
  color: #999;
}

button {
  margin-right: 0.6rem;
}
</style>
