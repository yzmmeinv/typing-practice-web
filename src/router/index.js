import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ArticleView from '../views/ArticleView.vue';
import PracticeView from '../views/PracticeView.vue';
import TestView from '../views/TestView.vue';
import ListView from '../views/ListView.vue';
import OtherView from '../views/OtherView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/article',
    name: 'article',
    component: ArticleView
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
    path: '/register',
    name: 'register',
    component: RegisterView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
