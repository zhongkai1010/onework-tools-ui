import { LAYOUT } from "../constant";

export default {
  name: "platform",
  path: "/platform",
  component: LAYOUT,
  redirect: "/platform/application",
  meta: { title: "平台", orderNo: 5, icon: "ep:platform" },
  children: [
    {
      name: "platform_application",
      path: "application",
      component: () => import("../../views/platform/application.vue"),
      meta: { title: "应用管理", icon: "ep:platform" }
    }
  ]
};
