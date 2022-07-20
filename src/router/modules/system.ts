import { LAYOUT } from "../constant";
import { OwRouteRecordRaw } from "../types";

export default [
  {
    name: "system",
    path: "/system",
    redirect: "/system/role",
    component: LAYOUT,
    meta: { title: "系统", icon: "ic:sharp-manage-accounts", orderNo: 2 },
    children: [
      {
        name: "system_user",
        path: "user",
        component: () => import("../../views/system/user.vue"),
        meta: { title: "用户管理", icon: "ant-design:user-outlined" }
      },
      {
        name: "system_role",
        path: "role",
        component: () => import("../../views/system/role.vue"),
        meta: { title: "角色管理", icon: "carbon:user-role" }
      },
      {
        name: "system_menu",
        path: "menu",
        component: () => import("../../views/system/menu.vue"),
        meta: { title: "菜单管理", icon: "ant-design:menu-outlined" }
      },
      {
        name: "system_department",
        path: "department",
        component: () => import("../../views/system/department.vue"),
        meta: { title: "部门管理", icon: "bi:postcard" }
      },
      {
        name: "system_post",
        path: "post",
        component: () => import("../../views/system/post.vue"),
        meta: { title: "岗位管理", icon: "eos-icons:job" }
      },
      {
        name: "system_dictionary",
        path: "dictionary",
        redirect: "/system/dictionary/single",
        meta: { title: "数据字典", icon: "arcticons:dictionary" },
        children: [
          {
            name: "system_dictionary_single",
            path: "single",
            component: () => import("../../views/system/dictionary/single.vue"),
            meta: { title: "单项字典", icon: "arcticons:dictionary" }
          },
          {
            name: "system_dictionary_multiple",
            path: "multiple",
            component: () => import("../../views/system/dictionary/multiple.vue"),
            meta: { title: "多项字典", icon: "arcticons:dictionary" }
          }
        ]
      },
      {
        name: "system_config",
        path: "config",
        component: () => import("../../views/system/config.vue"),
        meta: { title: "参数设置", icon: "codicon:symbol-parameter" }
      },
      {
        name: "system_notice",
        path: "notice",
        component: () => import("../../views/system/notice.vue"),
        meta: { title: "通知公告", icon: "fe:notice-active" }
      },
      {
        name: "system_log",
        path: "log",
        redirect: "/system/log/operate",
        meta: { title: "日志管理", icon: "codicon:symbol-parameter" },
        children: [
          {
            name: "system_log_operate",
            path: "operate",
            component: () => import("../../views/system/log/operate.vue"),
            meta: { title: "操作日志", icon: "radix-icons:activity-log" }
          },
          {
            name: "system_log_login",
            path: "login",
            component: () => import("../../views/system/log/login.vue"),
            meta: { title: "登录日志", icon: "ant-design:login-outlined" }
          }
        ]
      }
    ]
  }
] as OwRouteRecordRaw[];
