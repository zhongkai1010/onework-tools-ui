import { LAYOUT } from "../constant";
import { OwRouteRecordRaw } from "../types";

export default [
  {
    name: "other",
    path: "/other",
    redirect: "/other/flow",
    meta: { title: "其它", orderNo: 9, icon: "ic:baseline-devices-other" },
    component: LAYOUT,
    children: [
      {
        name: "other_flow",
        path: "flow",
        component: () => import("../../views/other/flow.vue"),
        meta: { title: "工作流", icon: "akar-icons:file" }
      },
      {
        name: "other_icon",
        path: "icon",
        component: () => import("../../views/other/icon.vue"),
        meta: { title: "图标", icon: "akar-icons:file" }
      },
      {
        name: "other_print",
        path: "print",
        component: () => import("../../views/other/print.vue"),
        meta: { title: "打印", icon: "akar-icons:file" }
      },
      {
        name: "other_time",
        path: "time",
        component: () => import("../../views/other/time.vue"),
        meta: { title: "时间线", icon: "akar-icons:file" }
      },
      {
        name: "other_trace",
        path: "trace",
        component: () => import("../../views/other/trace.vue"),
        meta: { title: "动作描点", icon: "akar-icons:file" }
      },
      {
        name: "other_drag",
        path: "drag",
        component: () => import("../../views/other/drag.vue"),
        meta: { title: "拖拽", icon: "akar-icons:file" }
      },
      {
        name: "other_video",
        path: "video",
        component: () => import("../../views/other/video.vue"),
        meta: { title: "视频播放", icon: "akar-icons:file" }
      },
      {
        name: "other_css",
        path: "css",
        component: () => import("../../views/other/css.vue"),
        meta: { title: "CSS动画", icon: "akar-icons:file" }
      },
      {
        name: "other_flex",
        path: "flex",
        component: () => import("../../views/other/flex.vue"),
        meta: { title: "Flex布局", icon: "akar-icons:file" }
      },
      {
        name: "other_login",
        path: "login",
        component: () => import("../../views/other/login.vue"),
        meta: { title: "第三方登录", icon: "akar-icons:file" }
      },
      {
        name: "other_link",
        path: "link",
        component: () => import("../../views/other/link.vue"),
        meta: { title: "外链", icon: "akar-icons:file" }
      },
      {
        name: "other_iframe",
        path: "iframe",
        component: () => import("../../views/other/iframe.vue"),
        meta: { title: "iframe", icon: "akar-icons:file" }
      },
      {
        name: "other_execl",
        path: "execl",
        component: () => import("../../views/other/execl.vue"),
        meta: { title: "Execl", icon: "akar-icons:file" }
      }
    ]
  }
] as OwRouteRecordRaw[];
