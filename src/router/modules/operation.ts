import { EMPTY_LAYOUT, LAYOUT } from "../constant";
import { OwRouteRecordRaw } from "../types";

export default [
  {
    name: "operation",
    path: "/operation",
    redirect: "/operation/database",
    meta: { title: "运维", icon: "akar-icons:file", orderNo: 6 },
    component: LAYOUT,
    children: [
      {
        name: "operation_database",
        path: "database",
        component: () => import("../../views/operation/database.vue"),
        meta: { title: "数据库管理", icon: "akar-icons:file" }
      },
      {
        name: "operation_file",
        path: "file",
        component: () => import("../../views/operation/file.vue"),
        meta: { title: "文件附件", icon: "akar-icons:file" }
      },
      {
        name: "operation_interface",
        path: "interface",
        component: () => import("../../views/operation/interface.vue"),
        meta: { title: "系统接口", icon: "akar-icons:file" }
      },
      {
        name: "operation_message",
        path: "message",
        meta: { title: "消息管理", icon: "akar-icons:file" },
        redirect: "/operation/message/log",
        component: EMPTY_LAYOUT,
        children: [
          {
            name: "operation_message_log",
            path: "log",
            component: () => import("../../views/operation/message/log.vue"),
            meta: { title: "消息记录", icon: "akar-icons:file" }
          },
          {
            name: "operation_message_template",
            path: "template",
            component: () => import("../../views/operation/message/template.vue"),
            meta: { title: "消息模板", icon: "akar-icons:file" }
          }
        ]
      }
    ]
  }
] as OwRouteRecordRaw[];
