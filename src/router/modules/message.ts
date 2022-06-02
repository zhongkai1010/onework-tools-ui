import type { RouteRecordRaw } from "vue-router";
import { LAYOUT } from "../constant";

export default {
  name: "message",
  path: "/message",
  redirect: "/message/template",
  meta: { title: "消息管理" },
  component: LAYOUT,
  children: [
    {
      name: "message_template",
      path: "template",
      component: () => import("../../views/message/template/index.vue"),
      meta: { title: "消息模板" },
    },
    {
      name: "message_logs",
      component: () => import("../../views/message/logs/index.vue"),
      path: "logs",
      meta: { title: "消息记录" },
    },
  ],
} as RouteRecordRaw;
