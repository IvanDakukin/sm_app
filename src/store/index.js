import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
  },
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
    fetchArticles(context) {
      fetch("/articles.json")
        .then((response) => response.json())
        .then((articles) => context.commit("fetchArticles", articles));
    },
    addArticle(context, article) {
      context.commit("addArticle", article);
    },
    togglePublish(context, articleId) {
      context.commit("togglePublish", articleId);
    },
  },
});
