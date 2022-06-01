import type { RouteRecordRaw } from "vue-router";
import MessageTemplate from "../../views/message/template/index.vue";
import MessageLogs from "../../views/message/logs/index.vue";

export default [
  {
    name: "message",
    path: "/message",
    redirect: "/message/message_template",
    meta: { title: "消息管理" },
    children: [
      {
        name: "message_template",
        path: "template",
        component: MessageTemplate,
        meta: { title: "消息模板" },
      },
      {
        name: "message_logs",
        component: MessageLogs,
        path: "logs",
        meta: { title: "消息记录" },
      },
    ],
  },
] as RouteRecordRaw[];
