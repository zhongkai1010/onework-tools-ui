import { LAYOUT } from '../constant';
import { AppRouteRecordRaw } from '/#/route';
import { t } from '/@/hooks/web/useI18n';

export default [
  {
    name: 'other',
    path: '/other',
    redirect: '/other/flow',
    meta: { title: t('router.other.other'), orderNo: 9, icon: 'ic:baseline-devices-other' },
    component: LAYOUT,
    children: [
      {
        name: 'other_flow',
        path: 'flow',
        component: () => import('/@/views/other/flow.vue'),
        meta: { title: t('router.other.flow'), icon: 'akar-icons:file' }
      },
      {
        name: 'other_icon',
        path: 'icon',
        component: () => import('/@/views/other/icon/index.vue'),
        meta: { title: t('router.other.icon'), icon: 'akar-icons:file' }
      },
      {
        name: 'other_print',
        path: 'print',
        component: () => import('/@/views/other/print.vue'),
        meta: { title: t('router.other.print'), icon: 'akar-icons:file' }
      },
      {
        name: 'other_time',
        path: 'time',
        component: () => import('/@/views/other/time/index.vue'),
        meta: { title: t('router.other.time'), icon: 'akar-icons:file' }
      },
      {
        name: 'other_trace',
        path: 'trace',
        component: () => import('/@/views/other/trace.vue'),
        meta: { title: t('router.other.trace'), icon: 'akar-icons:file' }
      },
      {
        name: 'other_drag',
        path: 'drag',
        component: () => import('/@/views/other/drag.vue'),
        meta: { title: t('router.other.drag'), icon: 'akar-icons:file' }
      },
      {
        name: 'other_video',
        path: 'video',
        component: () => import('/@/views/other/video/index.vue'),
        meta: { title: t('router.other.video'), icon: 'akar-icons:file' }
      },
      {
        name: 'other_css',
        path: 'css',
        component: () => import('/@/views/other/css.vue'),
        meta: { title: t('router.other.css'), icon: 'akar-icons:file' }
      },
      {
        name: 'other_flex',
        path: 'flex',
        component: () => import('/@/views/other/flex.vue'),
        meta: { title: t('router.other.flex'), icon: 'akar-icons:file', keepAlive: true }
      },
      {
        name: 'other_login',
        path: 'login',
        component: () => import('/@/views/other/login.vue'),
        meta: { title: t('router.other.login'), icon: 'akar-icons:file' }
      },

      {
        name: 'other_execl',
        path: 'execl',
        component: () => import('/@/views/other/execl.vue'),
        meta: { title: t('router.other.execl'), icon: 'akar-icons:file' }
      }
    ]
  }
] as AppRouteRecordRaw[];
