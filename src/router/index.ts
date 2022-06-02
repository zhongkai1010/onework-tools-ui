import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { LOGIN_PAGE, NOT_PAGE, HOME_PAGE } from "../router/constant";

/**
 * 遍历modules目录，获取RouteRecordRaw集合
 */
export const modulePages: RouteRecordRaw[] = [];
const modules = import.meta.globEager("./modules/*.ts");
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = (Array.isArray(mod) ? [...mod] : [mod]) as RouteRecordRaw[];
  modulePages.push(...modList);
});
console.log("----------modulePages----------------", modulePages);

export const routes: RouteRecordRaw[] = [
  LOGIN_PAGE,
  ...modulePages,
  HOME_PAGE,
  NOT_PAGE,
];

export const pageNameMap = new Map();
const getPageMap = (pages: RouteRecordRaw[]) => {
  pages.forEach((t) => {
    pageNameMap.set(t.name, t.component);
    if (t.children) {
      getPageMap(t.children);
    }
  });
};
getPageMap(modulePages);
console.log("----------pageNameMap----------------", pageNameMap);

console.log("----------routes----------------", routes);

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
