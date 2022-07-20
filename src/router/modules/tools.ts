import { LAYOUT } from "../constant";
import { OwRouteRecordRaw } from "../types";

export default [
  {
    name: "tool",
    path: "/tool",
    redirect: "/tool/model",
    component: LAYOUT,
    meta: { title: "工具", orderNo: 7, icon: "carbon:tool-kit" },
    children: [
      {
        name: "tool_model",
        path: "model",
        component: () => import("../../views/tool/model.vue"),
        meta: { title: "数据模型", icon: "material-symbols:3p" }
      },
      {
        name: "tool_translate",
        path: "translate",
        component: () => import("../../views/tool/translate.vue"),
        meta: { title: "翻译记录", icon: "material-symbols:3p" }
      },
      {
        name: "tool_generator",
        path: "generator",
        component: () => import("../../views/tool/generator.vue"),
        meta: { title: "代码生成", icon: "material-symbols:3p" }
      },
      {
        name: "tool_page",
        path: "page",
        component: () => import("../../views/tool/page.vue"),
        meta: { title: "页面模板", icon: "material-symbols:3p" }
      }
    ]
  }
] as OwRouteRecordRaw[];
