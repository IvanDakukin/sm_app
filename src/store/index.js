import Vue from "vue";
import Vuex from "vuex";
import services from "../services";

Vue.use(Vuex);

const moduleArticles = {
  state: () => ({
    articles: [],
  }),
  mutations: {
    fetchArticles(state, articles) {
      state.articles = articles;
    },
    addArticle(state, article) {
      state.articles.push(article);
    },
    togglePublish(state, articleId) {
      let targetArticle = state.articles.find(
        (article) => article.id === articleId
      );
      targetArticle.isPublished = !targetArticle.isPublished;
    },
  },
  actions: {
    addArticle(context, article) {
      context.commit("addArticle", article);
    },

    togglePublish(context, articleId) {
      context.commit("togglePublish", articleId);
    },
  },
};

export default new Vuex.Store({
  modules: {
    moduleArticles: moduleArticles,
    moduleFetch: services,
  },
});
