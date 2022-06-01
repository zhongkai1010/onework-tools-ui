import type { RouteRecordRaw } from "vue-router";

export default [
  {
    name: "user",
    path: "/user",
    component: import("../../views/user/index.vue"),
    meta: { title: "用户管理" },
  },
] as RouteRecordRaw[];
