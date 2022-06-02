import type { RouteRecordRaw } from "vue-router";
import { LAYOUT } from "../constant";

export default {
  name: "file",
  path: "/file",
  component: LAYOUT,
  redirect: "/file/index",
  children: [
    {
      name: "file_index",
      path: "index",
      component: () => import("../../views/file/index.vue"),
      meta: { title: "文件附件" },
    },
  ],
} as RouteRecordRaw;
