import { LAYOUT } from "../constant";

export default [
  {
    name: "system",
    path: "/system",
    redirect: "/system/role",
    component: LAYOUT,
    meta: { title: "系统管理" },
    children: [
      {
        name: "system_role",
        path: "role",
        component: () => import("../../views/system/role/index.vue"),
        meta: { title: "角色管理" }
      },
      {
        name: "system_form",
        path: "form",
        component: () => import("../../views/system/form/index.vue"),
        meta: { title: "表单管理" }
      },
      {
        name: "system_flow",
        path: "flow",
        component: () => import("../../views/system/flow/index.vue"),
        meta: { title: "流程管理" }
      },
      {
        name: "system_dictionary",
        path: "dictionary",
        component: () => import("../../views/system/dictionary/index.vue"),
        meta: { title: "数据字典" }
      }
    ]
  }
];
