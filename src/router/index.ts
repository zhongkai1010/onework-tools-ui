import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { LOGIN_PAGE, NOT_PAGE, HOME_PAGE } from "../router/constant";
import { getModuleRoutes } from "./utils";

// nprogress
import NProgress from "nprogress";
import "nprogress/nprogress.css";

/**
 * 遍历modules目录，获取RouteRecordRaw集合
 */
const moduleRoutes: RouteRecordRaw[] = getModuleRoutes();

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
/**
 * 页面头部加载进度条
 */
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export { routes, router };
