import type { RouteRecordRaw } from "vue-router";
import { LAYOUT } from "../constant";

export default {
  name: "application",
  path: "/application",
  component: LAYOUT,
  redirect: "/application/index",
  children: [
    {
      name: "application_index",
      path: "index",
      component:  () => import("../../views/application/index.vue"),
      meta: { title: "应用管理" },
    },
  ],
} as RouteRecordRaw;
