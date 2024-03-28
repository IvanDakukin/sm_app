<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/about">О нас</router-link>
      <router-link to="/new">Добавить статью</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 1200px;
  margin: auto;
  margin-top: 60px;
}
nav {
  display: flex;
  justify-content: space-between;
  width: 600px;
}
</style>
