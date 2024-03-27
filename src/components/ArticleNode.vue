<template>
  <div class="article" v-bind:class="{ article_published: isPublished }">
    <div class="article__head">
      <h2>{{ title }}</h2>
      <div class="article__author">
        {{ authorName }}
      </div>
    </div>
    <div class="article__body">
      <p>{{ body }}</p>
    </div>
    <div class="article__toggle-status-btn">
      <button v-on:click="$emit('toggle-publish-status', id)">
        Изменить статус<br />публикации
      </button>
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
    author: String,
  },
  computed: {
    authorName() {
      return this.isPublished ? this.author.toUpperCase() : this.author;
    },
  },
};
</script>

<style scoped>
.article {
  border-radius: 10px;
  max-height: 350px;
  width: 320px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
.article__head {
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.494);
}
.article__body {
  padding: 10px;
}
.article_published {
  background-color: #ff929d;
}
.article__author {
  color: rgba(54, 54, 54, 0.715);
  padding-bottom: 10px;
}
.article__toggle-status-btn {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>