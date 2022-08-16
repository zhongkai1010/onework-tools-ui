import { AppRouteRecordRaw } from '/#/route';
import { LAYOUT } from '../constant';
import { t } from '/@/hooks/web/useI18n';

export default [
  {
    name: 'monitor',
    path: '/monitor',
    redirect: '/monitor/user',
    component: LAYOUT,
    meta: { title: t('router.monitor.monitor'), icon: 'akar-icons:file', orderNo: 4 },
    children: [
      {
        name: 'monitor_user',
        path: 'user',
        meta: { title: t('router.monitor.user'), icon: 'akar-icons:file' },
        component: () => import('/@/views/monitor/user.vue'),
      },
      {
        name: 'monitor_task',
        path: 'task',
        meta: { title: t('router.monitor.task'), icon: 'akar-icons:file' },
        component: () => import('/@/views/monitor/task.vue'),
      },
      {
        name: 'monitor_data',
        path: 'data',
        meta: { title: t('router.monitor.data'), icon: 'akar-icons:file' },
        component: () => import('/@/views/monitor/data/index.vue'),
      },
      {
        name: 'monitor_service',
        path: 'service',
        meta: { title: t('router.monitor.service'), icon: 'akar-icons:file' },
        component: () => import('/@/views/monitor/service.vue'),
      },
      {
        name: 'monitor_cache',
        path: 'cache',
        meta: { title: t('router.monitor.cache'), icon: 'akar-icons:file' },
        component: () => import('/@/views/monitor/cache.vue'),
      },
      {
        name: 'monitor_list',
        path: 'list',
        meta: { title: t('router.monitor.list'), icon: 'akar-icons:file' },
        component: () => import('/@/views/monitor/list.vue'),
      },
    ],
  },
] as AppRouteRecordRaw[];
