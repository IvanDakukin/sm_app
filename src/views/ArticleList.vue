<template>
  <div class="article-list">
    <div class="article-list__body" v-if="articles.length">
      <Article
        v-for="article of articles"
        :key="article.id"
        :title="article.title"
        :body="article.body"
        :isPublished="article.isPublished"
        :author="article.author"
      ></Article>
    </div>
    <div v-else>No articles in the list.</div>
    <div class="article-form">
      <ArticleForm v-on:add-article="addArticle"/>
    </div>
  </div>
</template>

<script>
import Article from "@/components/ArticleNode.vue";
import ArticleForm from "@/components/ArticleForm.vue";
export default {
  name: "ArticleList",
  components: {
    Article,
    ArticleForm,
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Title 1",
          body: "Learn Vue",
          isPublished: true,
          author: "Ivan Dakukin",
        },
        {
          id: 2,
          title: "Title 2",
          body: "Lorem ipsum",
          isPublished: true,
          author: "Ivan Dakukin",
        },
        {
          id: 3,
          title: "Title 3",
          body: "Text example",
          isPublished: false,
          author: "Ivan Dakukin",
        },
      ],
    };
  },
  methods: {
    addArticle(article) {
      let newArticle = {
        id: this.articles.length + 1,
        ...article,
      };
      this.articles.push(newArticle);
    },
  },
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