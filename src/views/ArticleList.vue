<template>
  <div class="articlesList">
    <div class="articleList__body" v-if="articles.length">
      <Article
        v-for="article of articles"
        :key="article.id"
        :title="article.title"
        :body="article.body"
      ></Article>
    </div>
    <div v-else>No articles in the list.</div>
  </div>
</template>

<script>
import Article from "@/components/ArticleNode.vue";
export default {
  name: "ArticleList",
  components: {
    Article,
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Title 1",
          body: "Learn Vue",
          isPublished: true,
        },
        {
          id: 2,
          title: "Title 2",
          body: "Lorem ipsum",
          isPublished: true,
        },
        {
          id: 3,
          title: "Title 3",
          body: "Text example",
          isPublished: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.articleList__body {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>