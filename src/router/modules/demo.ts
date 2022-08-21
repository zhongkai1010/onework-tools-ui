import { LAYOUT, EMPTY_LAYOUT, FRAME_VIEW } from '../constant';
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
        name: 'demo_form',
        path: 'form',
        meta: { title: t('router.demo.form'), icon: 'ant-design:form-outlined' },
        component: () => import('/@/views/demo/dynamicForm.vue'),
      },
      {
        name: 'demo_table',
        path: 'table',
        meta: { title: t('router.demo.table'), icon: 'carbon:data-table-reference' },
        component: () => import('/@/views/demo/dynamicTable.vue'),
      },
      {
        name: 'demo_layout',
        path: 'layout',
        meta: { title: t('router.demo.layout'), icon: 'bi:layout-wtf' },
        component: () => import('/@/views/demo/layout.vue'),
      },
      {
        name: 'demo_container',
        path: 'container',
        meta: { title: t('router.demo.container'), icon: 'fluent:border-none-24-filled' },
        component: () => import('/@/views/demo/container.vue'),
      },
      {
        name: 'demo_error',
        path: 'error',
        meta: { title: t('router.demo.error'), icon: 'akar-icons:chat-error' },
        component: () => import('/@/views/demo/errorPage.vue'),
      },
      {
        name: 'demo_iframe',
        path: 'iframe',
        component: FRAME_VIEW,
        meta: {
          title: t('router.demo.iframe'),
          icon: 'akar-icons:frame',
          frameSrc: 'https://element-plus.org/zh-CN/',
        },
      },
      {
        name: 'demo_page',
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
        name: 'demo_edit',
        path: 'edit',
        meta: { title: t('router.demo.edit'), icon: 'akar-icons:edit' },
        component: () => import('/@/views/demo/edit.vue'),
      },
    ],
  },
] as AppRouteRecordRaw[];
