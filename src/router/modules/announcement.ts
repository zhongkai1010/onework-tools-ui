import type { RouteRecordRaw } from "vue-router";
import { LAYOUT } from "../constant";

export default {
  name: "announcement",
  path: "/announcement",
  component: LAYOUT,
  redirect: "/announcement/index",
  children: [
    {
      name: "announcement_index",
      path: "index",
      component: () => import("../../views/announcement/index.vue"),
      meta: { title: "通知公告" },
    },
  ],
} as RouteRecordRaw;
