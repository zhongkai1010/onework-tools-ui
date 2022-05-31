import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/",
    name: "Layout",
    component: () => import("../layout/index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "user:id?",
        name: "User",
        component: () => import("../views/system/user/index.vue"),
      },
      {
        path: "role",
        name: "Role",
        component: () => import("../views/system/role/index.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
