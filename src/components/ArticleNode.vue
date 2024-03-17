<template>
  <div class="article">
    <div class="article__title">
      <h2>{{ title }}</h2>
    </div>
    <div class="article__body">
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    body: String,
    isPublished: Boolean,
  },
};
</script>

<style scoped>
.article {
  max-height: 350px;
  width: 320px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
.article__title {
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.494);
}
.article__body {
  padding: 10px;
}
</style>