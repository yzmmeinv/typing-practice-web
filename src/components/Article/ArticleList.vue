<template>
  <a-list item-layout="vertical" size="middle" :pagination="pagination" :data-source="listData" :loading="initLoading">
    <template #renderItem="{ item }">
      <a-list-item key="item.title" @click="routeInfo(item.id)">
        <!-- 下方图标 -->
        <template #actions>
          <!-- 文字图标 -->
          <a-avatar size="small" :style="{ backgroundColor: '#7265e6', verticalAlign: 'middle' }">
            {{ item.language }}
          </a-avatar>
          <!-- 字数 -->
          <span style="user-select:none;">
            <component :is="component.bar" />
            {{ item.wordNums }}字
          </span>
          <!-- 日期 -->
          {{ item.updateTime }}
          <!-- 收藏图标 -->
          <span @click="toggleStar(item.id)" style=" user-select:none;">
            <component :is="component.star"
              :style="{ marginRight: '8px', color: isStar(item.id) ? '#FFB135' : 'inherit' }" />
            {{ articleStatus[item.id].stars }}
          </span>
          <!-- 点赞图标 -->
          <span @click="toggleLike(item.id)" style="user-select:none;">
            <component :is="component.like"
              :style="{ marginRight: '8px', color: isLike(item.id) ? '#F21212' : 'inherit' }" />
            {{ articleStatus[item.id].likes }}
          </span>
        </template>

        <!-- 描述 -->
        <a-list-item-meta>
          <template #description>
            <span v-for="text in item.tags" :key="text">
              {{ text }}
            </span>
          </template>
          <!-- 标题 -->
          <template #title>
            <!-- <a :href="item.href" @click="routeInfo(item.id)">{{ item.title }}</a> -->
            <router-link :to="{ name: 'detail', params: { articleId: item.id } }">{{ item.title }}</router-link>
            <a-avatar size="middle" :style="{ backgroundColor: '#609DBF', verticalAlign: 'middle' }">
              {{ item.authorName }}
            </a-avatar>
          </template>
        </a-list-item-meta>
        <!-- 内容 -->
        {{ item.summary }}
      </a-list-item>
    </template>
  </a-list>
</template>
<script>
import { StarOutlined, LikeOutlined, BarChartOutlined } from '@ant-design/icons-vue';
import { onMounted, ref } from 'vue';
import api from '../../api/index.js';
import { useStore } from 'vuex';
import router from '../../router';

export default {
  setup() {

    const listData = ref([]);
    const store = useStore();
    const initLoading = ref(true);
    const component = {
      star: StarOutlined,
      like: LikeOutlined,
      bar: BarChartOutlined,
    };

    const articleStatus = ref({});

    onMounted(() => {
      console.log('页面挂载完成,触发了onMounted钩子函数');
      if (store.state.user.isLogin) {
        api.articleApi.searchOwn({
          pageSize: pagination.pageSize,
          pageNo: 1
        }).then(res => {
          console.log(res.data.list);
          listData.value = res.data.list;
          pagination.total = res.data.total;
          initLoading.value = false;
          res.data.list.forEach(article => {
            // 初始化文章状态字典，将每篇文章的点赞状态设为 false
            articleStatus.value[article.id] = {
              isStarred: article.isPacked,
              isLiked: article.isStared,
              stars: article.packs,
              likes: article.stars,
            };
          });
        });
      }
    });
    const pagination = {
      pageSize: 10,
      total: 0,
      onChange: page => {
        console.log(page);
        api.articleApi.searchOwn({
          pageSize: pagination.pageSize,
          pageNo: page
        }).then(res => {
          console.log(res.data.list);
          listData.value = res.data.list;
          pagination.total = res.data.total;
          initLoading.value = false;
          res.data.list.forEach(article => {
            // 初始化文章状态字典，将每篇文章的点赞状态设为 false
            articleStatus.value[article.id] = {
              isStarred: article.isPacked,
              isLiked: article.isStared,
              stars: article.packs,
              likes: article.stars,
            };
          });
        });
      },
    };

    // 切换文章的收藏状态
    const toggleStar = articleId => {
      articleStatus.value[articleId].isStarred = !articleStatus.value[articleId].isStarred;
      if (articleStatus.value[articleId].isStarred) {
        articleStatus.value[articleId].stars++;
      } else {
        articleStatus.value[articleId].stars--;
      }
      // 在这里可以发送收藏请求，将收藏状态同步到服务器
      const formdata = new FormData();
      formdata.append("articleId", articleId);
      api.articleApi.star(formdata).then(res => {
        console.log(res);
      });
    };

    // 切换文章的点赞状态
    const toggleLike = articleId => {
      articleStatus.value[articleId].isLiked = !articleStatus.value[articleId].isLiked;
      if (articleStatus.value[articleId].isLiked) {
        articleStatus.value[articleId].likes++;
      } else {
        articleStatus.value[articleId].likes--;
      }
      // 在这里可以发送点赞请求，将点赞状态同步到服务器

      const formdata = new FormData();
      formdata.append("articleId", articleId);
      api.articleApi.like(formdata).then(res => {
        console.log(res);
      });
    };

    // 判断文章的收藏点赞状态
    const isStar = articleId => articleStatus.value[articleId].isStarred;
    const isLike = articleId => articleStatus.value[articleId].isLiked;

    const routeInfo = (params) => {
      router.push({
        name: 'detail',
        params: {
          articleId: params,
        }
      });
    };
    return {
      listData,
      pagination,
      component,
      initLoading,
      articleStatus,
      isStar,
      isLike,
      toggleStar,
      toggleLike,
      routeInfo,
    };
  }
};
</script>

<style scoped>
:where(.css-dev-only-do-not-override-hkh161).ant-list-vertical .ant-list-item .ant-list-item-meta {
  margin-block-end: 0;
}

.ant-list-item-meta-title a:nth-child(1) {
  margin-right: 10px;
}

.ant-list-item-meta-description span {
  display: inline-block;
  background-color: rgb(221, 244, 255);
  color: rgb(41, 138, 230);
  min-width: 70px;
  text-align: center;
  border-radius: 2rem;
  margin-right: 10px;
  margin-bottom: 10px;
}

:where(.css-dev-only-do-not-override-hkh161).ant-list .ant-list-item .ant-list-item-meta {
  align-items: center;
}

.ant-list-item .ant-list-item-meta .ant-list-item-meta-title span {
  float: right;
}

.ant-list-item:hover {
  transform: scale(1.03);
  transform-origin: left;
  transition: all 0.5s ease 0s;
  -webkit-transform: scale(1.03);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

:where(.css-dev-only-do-not-override-hkh161).ant-list-split .ant-list-item {
  padding-top: 0;
}
</style>
