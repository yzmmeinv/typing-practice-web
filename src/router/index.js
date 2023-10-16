import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ArticleView from '../views/ArticleView.vue';
import PracticeView from '../views/PracticeView.vue';
import TestView from '../views/TestView.vue';
import ListView from '../views/ListView.vue';
import OtherView from '../views/OtherView.vue';
import LoginView from '../views/LoginView.vue';
import UserView from '../views/UserView.vue';
import UserInfo from '../components/User/UserInfo.vue';
import ArticleDetailView from '../views/ArticleDetailView.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/article',
    name: 'article',
    component: ArticleView,
  },
  {
    path: "/detail/:articleId", //注意二级路由的路径千万不要加/
    name: "detail",
    component: ArticleDetailView,
  },
  {
    path: '/practice',
    name: 'practice',
    component: PracticeView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/other',
    name: 'other',
    component: OtherView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,

    children: [
      {
        path: "/user/info",
        name: "info",
        component: UserInfo,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
