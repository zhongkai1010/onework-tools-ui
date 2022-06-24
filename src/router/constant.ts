

import { RouteRecordRaw } from "vue-router";

export const LAYOUT = () => import('../layouts/index.vue')

export const LOGIN_PAGE = {
  name: "login",
  path: "/login",
  component: () => import("../views/login/index.vue"),
} as RouteRecordRaw;

export const NOT_PAGE = {
  path: "/:pathMatch(.*)*",
  name: "NotFound",
  component: () => import("../views/404.vue"),
} as RouteRecordRaw;

export const HOME_PAGE = {
  name: "root",
  path: "/",
  redirect: "/home",
  component: LAYOUT,
  children: [
    {
      name: "home",
      path: "/home",
      component: () => import('../views/home/index.vue'),
    },
  ],
} as RouteRecordRaw;
