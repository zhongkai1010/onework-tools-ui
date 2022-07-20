import { LAYOUT } from "../constant";
import { OwRouteRecordRaw } from "../types";

export default {
  name: "user",
  path: "/user",
  component: LAYOUT,
  redirect: "/user/index",
  meta: { title: "工作台", icon: "material-symbols:3p", orderNo: 1 },
  children: [
    {
      name: "user_index",
      path: "index",
      component: () => import("../../views/user/index.vue"),
      meta: { title: "工作台", icon: "material-symbols:3p" }
    }
  ]
} as OwRouteRecordRaw;
