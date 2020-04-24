import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/home/Home.vue";
import Login from "../views/auth/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  { path: "*", redirect: { name: "home" } }
  // This is for lazy loading
  // component: () => import("../views/auth/Login.vue")
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
