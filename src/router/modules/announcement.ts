import type { RouteRecordRaw } from "vue-router";

export default [
  {
    name: "announcement",
    path: "/announcement",
    component: () => import("../../views/announcement/index.vue"),
    meta: { title: "通知公告" },
  },
] as RouteRecordRaw[];
