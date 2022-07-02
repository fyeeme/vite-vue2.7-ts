import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/about.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/pages/secure/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

export default router;
