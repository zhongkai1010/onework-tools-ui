import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import NotFound from "../views/404.vue";
import Login from "../views/login/index.vue";
import Layout from "../layouts/index.vue";
import Home from "../views/home/index.vue";

export const routes: RouteRecordRaw[] = [];

const modules = import.meta.globEager("./modules/*.ts");

export const moduleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = (Array.isArray(mod) ? [...mod] : [mod]) as RouteRecordRaw[];
  moduleList.push(...modList);
});

routes.push(
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
        meta: {
          title: "主页",
        },
      },
      ...moduleList,
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  }
);

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
