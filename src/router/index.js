import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    component: () => import("@/layouts/EmptyLayout.vue"),
    children: [
      {
        path: "/auth/login",
        name: "login",
        meta: { auth: 0 },
        component: () => import("../views/signup/Login.vue")
      },
      {
        path: "/auth/logout",
        name: "logout",
        meta: { auth: 0 },
        component: () => import("../views/signup/Logout.vue")
      }
    ]
  },

  {
    path: "/",
    component: () => import("@/layouts/DefaultLayout"),
    children: [
      {
        path: "/",
        name: "Home",
        meta: { auth: 0 },
        component: () => import("../views/InProgress.vue")
      },
      {
        path: "/table",
        name: "Table",
        meta: { auth: 0 },
        component: () => import("../views/Table.vue")
      },
      {
        path: "/income",
        name: "Income",
        meta: { auth: 0 },
        component: () => import("../views/Income.vue")
      },
      {
        path: "/analitic",
        name: "Analitic",
        meta: { auth: 0 },
        component: () => import("../views/InProgress.vue")
      },

      {
        path: "**",
        meta: { auth: 0 },
        component: () => import("../views/404.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;
    window.scrollTo(
      //(0, 0);
      { top: 0, behavior: "smooth" }
    );
    return { x: 0, y: 0 };
  }
});

export default router;
