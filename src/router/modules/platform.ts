import { LAYOUT } from "../constant";

export default {
  name: "platform",
  path: "/platform",
  component: LAYOUT,
  redirect: "/platform/application",
  meta: { title: "平台管理" },
  children: [
    {
      name: "platform_application",
      path: "application",
      component: () => import("../../views/platform/application.vue"),
      meta: { title: "应用管理" }
    }
  ]
};
