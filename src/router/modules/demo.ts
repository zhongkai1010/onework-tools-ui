import { OwRouteRecordRaw } from "../types";
import { LAYOUT, EMPTY_LAYOUT } from "../constant";

export default [
  {
    name: "demo",
    path: "/demo",
    redirect: "/demo/table",
    component: LAYOUT,
    meta: { title: "示例", orderNo: 8, icon: "carbon:calendar-tools" },
    children: [
      {
        name: "demo_table",
        path: "table",
        redirect: "/demo/table/complex",
        meta: { title: "表格", icon: "akar-icons:file" },
        component: EMPTY_LAYOUT,
        children: [
          {
            name: "demo_table_complex",
            path: "complex",
            meta: { title: "综合表格", icon: "akar-icons:file" },
            component: () => import("/@/views/demo/table/complex.vue")
          },
          {
            name: "demo_table_inline",
            path: "inline",
            meta: { title: "行内边界表格", icon: "akar-icons:file" },
            component: () => import("/@/views/demo/table/inline.vue")
          },
          {
            name: "demo_table_custom",
            path: "custom",
            meta: { title: "自定义表格", icon: "akar-icons:file" },
            component: () => import("/@/views/demo/table/custom.vue")
          },
          {
            name: "demo_table_dynamic",
            path: "dynamic",
            meta: { title: "动态表格", icon: "akar-icons:file" },
            component: () => import("/@/views/demo/table/dynamic.vue")
          }
        ]
      },
      {
        name: "demo_list",
        path: "list",
        meta: { title: "列表", icon: "akar-icons:file" },
        component: () => import("/@/views/demo/list.vue")
      },
      {
        name: "demo_card",
        path: "card",
        meta: { title: "卡片", icon: "akar-icons:file" },
        component: () => import("/@/views/demo/card.vue")
      },
      {
        name: "demo_description",
        path: "description",
        meta: { title: "描述", icon: "akar-icons:file" },
        component: () => import("/@/views/demo/description.vue")
      },
      {
        name: "demo_edit",
        path: "edit",
        meta: { title: "编辑器", icon: "akar-icons:file" },
        component: () => import("/@/views/demo/edit.vue")
      },
      {
        name: "demo_form",
        path: "form",
        meta: { title: "表单", icon: "akar-icons:file" },
        redirect: "/demo/form/complex",
        component: EMPTY_LAYOUT,
        children: [
          {
            name: "demo_form_complex",
            path: "complex",
            meta: { title: "综合表单", icon: "akar-icons:file" },
            component: () => import("/@/views/demo/form/complex.vue")
          },
          {
            name: "demo_form_step",
            path: "step",
            meta: { title: "分步表单", icon: "akar-icons:file" },
            component: () => import("/@/views/demo/form/step.vue")
          }
        ]
      }
    ]
  }
] as OwRouteRecordRaw[];
