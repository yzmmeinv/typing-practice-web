<template>
  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <a-layout>
      <a-layout-header :style="headerStyle">
        <a-row>
          <a-col :span="13">
            <span class="title">{{ detail.title }}</span>
          </a-col>
          <a-col :span="7">
            <a-button>去练习</a-button>
            <a-button>创建比赛</a-button>
            <a-button>去修改</a-button>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="17">
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
              <div @click="toggleStar">
                <StarOutlined :style="{ color: detail.isPacked ? '#FFB135' : 'inherit' }" /> <br>
                {{ detail.packs }}
              </div>
              <div @click="toggleLike">
                <LikeOutlined :style="{ color: detail.isStared ? '#F21212' : 'inherit' }" /> <br>
                {{ detail.stars }}
              </div>
            </div>
          </a-col>
          <a-col :span="16">
            <p class="height-50">{{ detail.content }}</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="15" :offset="1">
            <div class="explain">
              声明：以上文章均为用户自行添加，仅供打字交流使用，不代表本站观点，本站不承担任何法律责任，特此声明！如果有侵犯到您的权利，请及时联系我们删除。
            </div>
          </a-col>
        </a-row>
      </a-layout-content>
      <a-layout-footer :style="footerStyle">
        <a-row>
          <a-col :span="17">
            <ArticleComment />
          </a-col>
        </a-row>
      </a-layout-footer>
    </a-layout>
  </a-space>
</template>
  
<script setup>
import { StarOutlined, LikeOutlined } from '@ant-design/icons-vue';
import ArticleComment from '@/components/Article/ArticleComment.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import api from '@/api';
import { useDebounce } from '@/api/utils/debounce';

const route = useRoute();
const detail = ref({});
const { debounce } = useDebounce();

onMounted(() => {
  if (route.params.articleId) {
    api.articleApi.desc(route.params.articleId).then(res => {
      detail.value = res.data.data;
      console.log(detail.value);
    });
  }
});


// 切换文章的收藏状态
// 创建一个防抖函数，延迟 1000 毫秒
const toggleStar = debounce(() => {
  // 在这里执行点击逻辑
  detail.value.isPacked = !detail.value.isPacked;
  if (detail.value.isPacked) {
    detail.value.packs++;
  } else {
    detail.value.packs--;
  }
  // 在这里可以发送收藏请求，将收藏状态同步到服务器
  const formdata = new FormData();
  formdata.append("articleId", detail.value.id);
  api.articleApi.star(formdata).then(res => {
    console.log(res);
  });
  console.log('按钮被点击了！');
}, 1000);


// 切换文章的点赞状态
const toggleLike = debounce(() => {
  detail.value.isStared = !detail.value.isStared;
  if (detail.value.isStared) {
    detail.value.stars++;
  } else {
    detail.value.stars--;
  }
  // 在这里可以发送点赞请求，将点赞状态同步到服务器
  const formdata = new FormData();
  formdata.append("articleId", detail.value.id);
  api.articleApi.like(formdata).then(res => {
    console.log(res);
  });
  console.log('按钮被点击了！');
}, 1000);

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
  user-select: none;
  cursor: pointer;
}

.explain {
  font-size: 12px;
  color: #999;
}


button {
  margin-right: 0.6rem;
}
</style>
