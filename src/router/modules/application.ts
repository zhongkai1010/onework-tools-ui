import { LAYOUT } from "../constant";

export default {
  name: "application",
  path: "/application",
  component: LAYOUT,
  redirect: "/application/index",
  meta: { title: "应用管理" },
  children: [
    {
      name: "application_index",
      path: "index",
      component: () => import("../../views/application/index.vue"),
      meta: { title: "应用管理" }
    }
  ]
};
