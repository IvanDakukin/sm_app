export default {
  state: () => ({
    isLoading: false,
    loadError: false,
  }),
  mutations: {
    setLoading(state, value) {
      state.isLoading = value;
    },
    setLoadError(state, value) {
      state.loadError = value;
    },
  },
  actions: {
    fetchArticles(context) {
      context.commit("setLoading", true);
      fetch("/articles.json")
        .then((response) => response.json())
        .then((articles) => {
          context.commit("fetchArticles", articles);
          context.commit("setLoadError", false);
        })
        .catch(context.commit("setLoadError", true))
        .finally(context.commit("setLoading", false));
    },
  },
};
