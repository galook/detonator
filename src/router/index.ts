import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import View from "../views/View.vue";

const pageNames = ["Create", "Edit"];

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "View",
    component: View,
    children: [
      {
        path: "/:no",
        name: "Show",
        component: () => import(`../views/View.vue`),
      },
    ],
  },
];

pageNames.forEach((pageName) => {
  routes.push({
    path: `/${pageName.toLowerCase()}`,
    name: `${pageName}`,
    component: () => import(`../views/${pageName}.vue`),
    children: [
      {
        path: `:no`,
        name: `${pageName}Num`,
        component: () => import(`../views/${pageName}.vue`),
      },
    ],
  });
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import('../views/Create.vue')
