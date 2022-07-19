import { LAYOUT } from "../constant";
import { OwRouteRecordRaw } from "../types";

export default [
  {
    name: "operation",
    path: "/operation",
    redirect: "/operation/operation_organization",
    meta: { title: "运维平台" },
    component: LAYOUT,
    children: [
      {
        name: "operation_organization",
        path: "organization",
        component: () => import("../../views/operation/organization/index.vue"),
        meta: { title: "组织机构" }
      },
      {
        name: "operation_database",
        path: "database",
        component: () => import("../../views/operation/database/index.vue"),
        meta: { title: "数据库管理" }
      },
      {
        name: "operation_translate",
        path: "translate",
        component: () => import("../../views/operation/translate/index.vue"),
        meta: { title: "翻译记录" }
      },
      {
        name: "operation_logs",
        path: "logs",
        component: () => import("../../views/operation/logs/index.vue"),
        meta: { title: "日志记录" }
      }
    ]
  }
] as OwRouteRecordRaw[];
