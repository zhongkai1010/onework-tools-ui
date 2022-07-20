import { OwRouteRecordRaw } from "../types";
import { LAYOUT } from "../constant";

export default [
  {
    name: "monitor",
    path: "/monitor",
    redirect: "/monitor/user",
    component: LAYOUT,
    meta: { title: "监控", icon: "akar-icons:file", orderNo: 4 },
    children: [
      {
        name: "monitor_user",
        path: "user",
        meta: { title: "在线用户", icon: "akar-icons:file" },
        component: () => import("../../views/monitor/user.vue")
      },
      {
        name: "monitor_task",
        path: "task",
        meta: { title: "定时任务", icon: "akar-icons:file" },
        component: () => import("../../views/monitor/task.vue")
      },
      {
        name: "monitor_data",
        path: "data",
        meta: { title: "数据监控", icon: "akar-icons:file" },
        component: () => import("../../views/monitor/data.vue")
      },
      {
        name: "monitor_service",
        path: "service",
        meta: { title: "服务监控", icon: "akar-icons:file" },
        component: () => import("../../views/monitor/service.vue")
      },
      {
        name: "monitor_cache",
        path: "cache",
        meta: { title: "缓存监控", icon: "akar-icons:file" },
        component: () => import("../../views/monitor/cache.vue")
      },
      {
        name: "monitor_list",
        path: "list",
        meta: { title: "缓存列表", icon: "akar-icons:file" },
        component: () => import("../../views/monitor/list.vue")
      }
    ]
  }
] as OwRouteRecordRaw[];
