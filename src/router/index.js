import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('../views/Article/ArticleView.vue'),
  },
  {
    path: "/detail/:articleId", //注意二级路由的路径千万不要加/
    name: "detail",
    component: () => import('../views/Article/ArticleDetailView.vue'),
  },
  {
    path: '/practice',
    name: 'practice',
    component: () => import('../views/Practice/PracticeView.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/TestView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/ListView.vue')
  },
  {
    path: '/other',
    name: 'other',
    component: () => import('../views/OtherView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User/UserView.vue'),

    children: [
      {
        path: "info",
        name: "info",
        component: () => import('../views/User/UserInfo.vue'),
      },
      {
        path: "arlist",
        name: "arlist",
        component: () => import('../views/User/UserArticleList.vue'),
      },
      {
        path: "grades",
        name: "grades",
        component: () => import('../views/User/UserGradesList.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 在路由导航前触发获取字典数据的操作
// router.beforeEach((to, from, next) => {
//   store.dispatch("fetchDictionary", "articleTag").then(() => {
//     next();
//   });
// });

export default router;
