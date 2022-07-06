export default [
  {
    name: "demo01",
    path: "/demo01",
    meta: { title: "示例1", icon: "akar-icons:file" },
    component: () => import("/@/views/demo/demo01.vue")
  },
  {
    name: "demo02",
    path: "/demo02",
    meta: { title: "示例2", icon: "akar-icons:file" },
    component: () => import("/@/views/demo/demo02.vue")
  }
];
