import { LAYOUT } from "../constant";

export default {
  name: "announcement",
  path: "/announcement",
  component: LAYOUT,
  redirect: "/announcement/index",
  meta: { title: "通知公告" },
  children: [
    {
      name: "announcement_index",
      path: "index",
      component: () => import("../../views/login/index.vue"),
      meta: { title: "通知公告" }
    }
  ]
};
