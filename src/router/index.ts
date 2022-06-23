import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { LOGIN_PAGE, NOT_PAGE, HOME_PAGE } from "../router/constant";

/**
 * 遍历modules目录，获取RouteRecordRaw集合
 */
const moduleRoutes: RouteRecordRaw[] = [];
const modules = import.meta.globEager("./modules/*.ts");
Object.keys(modules).forEach(key => {
  const mod = modules[key].default || {};
  const modList = (Array.isArray(mod) ? [...mod] : [mod]) as RouteRecordRaw[];
  moduleRoutes.push(...modList);
});
console.log("----------modulePages----------------", moduleRoutes);

/**
 * routes
 */
const routes: RouteRecordRaw[] = [
  LOGIN_PAGE,
  ...moduleRoutes,
  HOME_PAGE,
  NOT_PAGE
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export { moduleRoutes, routes, router };
