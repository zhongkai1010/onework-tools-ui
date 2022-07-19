import { LAYOUT } from "../constant";
import { OwRouteRecordRaw } from "../types";

export default {
  name: "announcement",
  path: "/announcement",
  component: LAYOUT,
  redirect: "/announcement/index",
  meta: { title: "通知公告", icon: "" },
  children: [
    {
      name: "announcement_index",
      path: "index",
      component: () => import("../../views/announcement/index.vue"),
      meta: { title: "通知公告" }
    }
  ]
} as OwRouteRecordRaw;
