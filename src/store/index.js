import { createStore } from 'vuex';
import ModuleUser from '@/store/user';
import ModuleArticle from './article';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: ModuleUser,
    article: ModuleArticle,
  }
});
