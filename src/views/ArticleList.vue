<template>
  <div class="article-list">
    <div class="article-list__body" v-if="articles.length">
      <Article
        v-for="article of articles"
        :key="article.id"
        :id="article.id"
        :title="article.title"
        :body="article.body"
        :isPublished="article.isPublished"
        :author="article.author"
        v-on:toggle-publish-status="togglePublishStatus"
      ></Article>
    </div>
    <div v-else>No articles in the list.</div>
  </div>
</template>

<script>
import Article from "@/components/ArticleNode.vue";
import { mapState } from 'vuex';
export default {
  name: "ArticleList",
  components: {
    Article,
  },
  methods: {
    addArticle(article) {
      let newArticle = {
        id: this.articles.length + 1,
        ...article,
      };
      this.articles.push(newArticle);
    },
    togglePublishStatus(id) {
      const targetArticle = this.articles.find((article) => article.id == id);
      targetArticle.isPublished = !targetArticle.isPublished;
    },
  },
  computed: mapState({
		articles: state => state.moduleArticles.articles,
	})
};
</script>

<style scoped>
.article-list__body {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>