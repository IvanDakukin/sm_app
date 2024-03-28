import Vue from "vue";
import VueRouter from "vue-router";
import ArticleList from "@/views/ArticleList.vue";
import AboutView from "@/views/AboutView.vue";
import ArticleNode from "@/components/ArticleNode.vue";
import ArticleForm from "@/components/ArticleForm.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "articles",
    component: ArticleList,
  },
  {
    path: "/about",
    name: "О нас",
    component: AboutView,
  },
  {
    path: "/article/:id",
    component: ArticleNode,
    props: (route) => store.state.articles.find((x) => x.id == route.params.id)
  },
  {
    path: "/new",
    name: "Добавить статью",
    component: ArticleForm,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
