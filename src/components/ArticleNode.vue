<template>
  <div class="article" v-bind:class="{ article_published: isPublished }">
    <div class="article__head">
      <router-link :to="articleUrl">
        <h2>{{ title }}</h2>
      </router-link>
      <div class="article__author">
        {{ authorName }}
      </div>
    </div>
    <div class="article__body">
      <p>{{ body }}</p>
    </div>
    <div class="article__toggle-status-btn">
      <button @click="togglePublish">
        Изменить статус<br />публикации
      </button>
    </div>
  </div>
</template>

<script>
import store from '@/store';
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
    articleUrl() {
      return `article/${this.id}`;
    },
  },
  watch: {
    isPublished(oldVal, newVal) {
      console.log(`Статус публикации сменён c ${oldVal} на ${newVal}!`);
    },
  },
  methods: {
    togglePublish() {
      store.dispatch("togglePublish", this.id);
    }
  }
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