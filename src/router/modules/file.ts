import type { RouteRecordRaw } from "vue-router";

export default [
  {
    name: "file",
    path: "/file",
    component: import("../../views/file/index.vue"),
    meta: { title: "文件附件" },
  },
] as RouteRecordRaw[];
