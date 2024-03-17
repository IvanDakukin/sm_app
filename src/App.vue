<template>
  <div id="app">
    <ArticleList></ArticleList>
  </div>
</template>

<script>
import ArticleList from "./views/ArticleList.vue";
export default {
  name: "App",
  components: {
    ArticleList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 1200px;
  margin: auto;
  margin-top: 60px;
}
</style>
