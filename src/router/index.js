import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: "main",
    component: Home
  },
  {
    path: "/table",
    name: "Table",
    meta: "main",
    component: () => import("../views/Table.vue")
  },
  {
    path: "/income",
    name: "Income",
    meta: "main",
    component: () => import("../views/Income.vue")
  },
  {
    path: "/outcome",
    name: "Outcome",
    meta: "main",
    component: () => import("../views/Income.vue")
  },
  {
    path: "/analitic",
    name: "Analitic",
    meta: "main",
    component: () => import("../views/In-progress.vue")
  },
  {
    path: "/login",
    name: "Login",
    meta: "empty",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/logout",
    name: "Logout",
    meta: "empty",
    component: () => import("../views/Logout.vue")
  },
  {
    path: "**",
    meta: "main",
    component: () => import("../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
