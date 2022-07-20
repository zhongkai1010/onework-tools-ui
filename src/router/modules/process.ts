import { LAYOUT } from "../constant";
import { OwRouteRecordRaw } from "../types";

export default [
  {
    name: "process",
    path: "/process",
    component: LAYOUT,
    redirect: "/process/management",
    meta: { title: "流程管理", icon: "clarity:flow-chart-line" },
    children: [
      {
        name: "flow_management",
        path: "management",
        component: () => import("../../views/process/management.vue"),
        meta: { title: "流程管理", icon: "ant-design:ant-design-outlined" }
      },
      {
        name: "flow_design",
        path: "design",
        component: () => import("../../views/process/design.vue"),
        meta: { title: "流程设计", icon: "ant-design:ant-design-outlined" }
      },
      {
        name: "process_monitor",
        path: "monitor",
        component: () => import("../../views/process/monitor.vue"),
        meta: { title: "流程监听", icon: "ant-design:monitor-outlined" }
      },
      {
        name: "flow_expression",
        path: "expression",
        component: () => import("../../views/process/expression.vue"),
        meta: { title: "表达式管理", icon: "ooui:search-regular-expression" }
      },
      {
        name: "flow_form",
        path: "form",
        component: () => import("../../views/process/form.vue"),
        meta: { title: "表单管理", icon: "ant-design:form-outlined" }
      }
    ]
  }
] as OwRouteRecordRaw[];
