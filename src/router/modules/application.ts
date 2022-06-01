import type { RouteRecordRaw } from "vue-router";

export default [
  {
    name: "application",
    path: "/application",
    component: import("../../views/application/index.vue"),
    meta: { title: "应用管理" },
  },
] as RouteRecordRaw[];
