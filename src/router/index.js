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
        path: "/user/info",
        name: "info",
        component: () => import('../views/User/UserInfo.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
