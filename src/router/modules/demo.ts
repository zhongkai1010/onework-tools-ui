import { RouteRecordNormalized } from "vue-router";

export default [
  {
    name: "demo",
    path: "/demo",
    redirect: "/demo/tabs",
    component: () => import("/@/views/demo/index.vue"),
    meta: { title: "组件示例", icon: "akar-icons:file" },
    children: [
      {
        name: "demo_one",
        path: "demo01",
        meta: { title: "示例1", icon: "akar-icons:file" },
        component: () => import("/@/views/demo/demo02.vue")
      },
      {
        name: "demo_tools",
        path: "tools",
        meta: { title: "示例2", icon: "akar-icons:file" },
        component: () => import("/@/views/demo/headerTools.vue")
      },
      {
        name: "demo_tabs",
        path: "tabs",
        meta: { title: "示例2", icon: "akar-icons:file" },
        component: () => import("/@/views/demo/tabs.vue")
      }
    ]
  }
] as unknown as RouteRecordNormalized;
