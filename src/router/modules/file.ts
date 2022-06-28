import { LAYOUT } from "../constant";

export default {
  name: "file",
  path: "/file",
  component: LAYOUT,
  redirect: "/file/index",
  meta: { title: "文件管理", icon: "akar-icons:file" },
  children: [
    {
      name: "file_index",
      path: "index",
      component: () => import("../../views/file/index.vue"),
      meta: { title: "文件附件" }
    }
  ]
};
