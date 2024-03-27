<template>
  <form class="article-form">
    <div class="article-form__title">Добавить статью</div>
    <div class="article-form__element">
      <label for="title">Заголовок</label>
      <input
        type="text"
        name="title"
        class="article-form__input"
        v-model="article.title"
      />
    </div>
    <div class="article-form__element">
      <label for="author">Автор</label>
      <input
        type="text"
        name="author"
        class="article-form__input"
        v-model="article.author"
      />
    </div>
    <div class="article-form__element">
      <label>Текст статьи</label>
      <textarea v-model="article.body"></textarea>
    </div>
    <div class="article-form__element">
      <label>Опубликована</label>
      <input type="checkbox" v-model="article.isPublished" />
    </div>
    <input
      type="submit"
      value="Добавить"
      v-on:click.prevent="$emit('add-article', article)"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: "",
        author: "",
        body: "",
        isPublished: false,
      },
    };
  },
};
</script>

<style scoped>
.article-form {
  padding: 30px 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  width: 300px;
  margin-top: 40px;
}
.article-form__input {
  font-size: 14px;

  padding: 3px;
}
.article-form__title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
}
.article-form__element {
  font-size: 16px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>