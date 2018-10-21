import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/discover",
      name: "Discover",

      component: () => import("./views/Discover.vue"),
      // children: [
      //   {
      //     path: "upcoming",
      //     // component: () => import("./components/MovieTile.vue")
      //   },
      //   {
      //     path: "toprated",
      //     // component: () => import("./components/MovieTile.vue")
      //   },
      //   {
      //     path: "popular",
      //     // component: () => import("./components/MovieTile.vue")
      //   }
      // ]
    },
    {
      path: "/discover/upcoming",
      component: () => import("./components/MovieTile.vue")
    },
    {
      path: "/discover/toprated",
      component: () => import("./components/MovieTile.vue")
    },
    {
      path: "/discover/popular",
      component: () => import("./components/MovieTile.vue")
    },





    {
      path: "/search/:key",
      name: "search",
      component: () => import("./views/SearchResult.vue")
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: () => import("./views/Movie.vue")
    }
  ]
});
