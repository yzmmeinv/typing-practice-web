import api from '../api/index.js';

const ModuleArticle = {
  state: {
    articleLanguage: null,
    articleTag: null,
  },
  getters: {
  },
  mutations: {
    setArticleLanguage(state, language) {
      state.articleLanguage = language;
    },
    setArticleTag(state, tag) {
      state.articleTag = tag;
    },
  },
  actions: {
    fetchDictionary(context, data) {
      api.baseApi.getDictionary(data)
        .then(res => {
          if (res.data.success) {
            if (data === "articleTag") {
              context.commit('setArticleTag', res.data.list);
            } else if (data === "articleLanguage") {
              context.commit('setArticleLanguage', res.data.list);
            }
          }
        });
    },
  },
  modules: {
  }
};
export default ModuleArticle;
