import { LAYOUT, EMPTY_LAYOUT } from '../constant';
import { AppRouteRecordRaw } from '/#/route';
import { t } from '/@/hooks/web/useI18n';

export default [
  {
    name: 'demo',
    path: '/demo',
    redirect: '/demo/table',
    component: LAYOUT,
    meta: { title: t('router.demo.demo'), orderNo: 2, icon: 'carbon:calendar-tools' },
    children: [
      {
        name: 'demo_layout',
        path: 'layout',
        meta: { title: t('router.demo.layout'), icon: 'bi:layout-wtf' },
        component: () => import('/@/views/demo/layout/index.vue'),
      },
      {
        name: 'demo_null',
        path: 'null',
        meta: { title: t('router.demo.null'), icon: 'fluent:border-none-24-filled' },
        component: () => import('/@/views/demo/nullPage.vue'),
      },
      {
        name: 'demo_blank',
        path: 'blank',
        meta: { title: t('router.demo.blank'), icon: 'bx:file-blank' },
        component: () => import('/@/views/demo/blankPage.vue'),
      },
      {
        name: 'demo_error',
        path: 'error',
        meta: { title: t('router.demo.error'), icon: 'akar-icons:chat-error' },
        component: () => import('/@/views/demo/errorPage.vue'),
      },
      // {
      //   name: "demo_iframe",
      //   path: "iframe",
      //   component: FRAME_VIEW,
      //   meta: {
      //     title: "iframe示例",
      //     icon: "akar-icons:frame",
      //     : "https://element-plus.org/zh-CN/"
      //   }
      // },
      {
        name: 'demo_table',
        path: 'page',
        redirect: '/demo/page/standard',
        meta: { title: t('router.demo.page.page'), icon: 'ant-design:table-outlined' },
        component: EMPTY_LAYOUT,
        children: [
          {
            name: 'demo_page_standard',
            path: 'standard',
            meta: { title: t('router.demo.page.standard'), icon: 'codicon:layout-centered' },
            component: () => import('/@/views/demo/page/centered.vue'),
          },
          {
            name: 'demo_page_left_right',
            path: 'left-right',
            meta: {
              title: t('router.demo.page.leftRight'),
              icon: 'icon-park-solid:horizontally-centered',
            },
            component: () => import('/@/views/demo/page/leftRight.vue'),
          },
          {
            name: 'demo_page_up_down',
            path: 'up-down',
            meta: {
              title: t('router.demo.page.upDown'),
              icon: 'icon-park-solid:vertically-centered',
            },
            component: () => import('/@/views/demo/page/upDown.vue'),
          },
        ],
      },
      {
        name: 'demo_list',
        path: 'list',
        meta: { title: t('router.demo.list.list'), icon: 'ant-design:unordered-list-outlined' },
        component: EMPTY_LAYOUT,
        children: [
          {
            name: 'demo_list_dynamic',
            path: 'dynamic',
            meta: { title: t('router.demo.list.dynamic'), icon: 'carbon:data-table-reference' },
            component: () => import('/@/views/demo/list/dynamic.vue'),
          },
          {
            name: 'demo_list_card',
            path: 'card',
            meta: { title: t('router.demo.list.card'), icon: 'dashicons:table-row-after' },
            component: () => import('/@/views/demo/list/card.vue'),
          },
        ],
      },
      {
        name: 'demo_message',
        path: 'message',
        meta: { title: t('router.demo.message'), icon: 'bi:credit-card' },
        component: () => import('/@/views/demo/message.vue'),
      },
      {
        name: 'demo_axios',
        path: 'axios',
        meta: { title: t('router.demo.axios'), icon: 'akar-icons:file' },
        component: () => import('/@/views/demo/axios.vue'),
      },
      {
        name: 'demo_edit',
        path: 'edit',
        meta: { title: t('router.demo.edit'), icon: 'akar-icons:edit' },
        component: () => import('/@/views/demo/edit.vue'),
      },
      {
        name: 'demo_form',
        path: 'form',
        meta: { title: t('router.demo.form.form'), icon: 'clarity:form-line' },
        redirect: '/demo/form/complex',
        component: EMPTY_LAYOUT,
        children: [
          {
            name: 'demo_form_complex',
            path: 'complex',
            meta: { title: t('router.demo.form.complex'), icon: 'ant-design:form-outlined' },
            component: () => import('/@/views/demo/form/complex.vue'),
          },
          {
            name: 'demo_form_step',
            path: 'step',
            meta: { title: t('router.demo.form.step'), icon: 'fluent:form-20-regular' },
            component: () => import('/@/views/demo/form/step.vue'),
          },
        ],
      },
    ],
  },
  {
    name: 'demo_layout_row',
    path: '/demo/layout/row',
    component: () => import('/@/views/demo/layout/row.vue'),
  },
] as AppRouteRecordRaw[];
