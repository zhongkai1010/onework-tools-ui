import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { LOGIN_PAGE, NOT_PAGE, HOME_PAGE } from "../router/constant";
import { getModuleRoutes } from "./utils";

/**
 * 遍历modules目录，获取RouteRecordRaw集合
 */
const moduleRoutes = getModuleRoutes();

/**
 * routes 集合
 */
const routes: RouteRecordRaw[] = [LOGIN_PAGE, ...moduleRoutes, HOME_PAGE, NOT_PAGE];
/**
 * router
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export { routes, router };
