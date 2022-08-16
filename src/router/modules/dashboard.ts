import { LAYOUT } from '../constant';
import { AppRouteRecordRaw } from '/#/route';
import { t } from '/@/hooks/web/useI18n';

export default {
  name: 'dashboard',
  path: '/dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: { title: t('router.dashboard.dashboard'), orderNo: 1, icon: 'ep:platform' },
  children: [
    {
      name: 'dashboard_analysis',
      path: 'analysis',
      component: () => import('/@/views/dashboard/analysis.vue'),
      meta: { title: t('router.dashboard.analysis'), icon: 'ep:platform' },
    },
    {
      name: 'dashboard_monitor',
      path: 'monitor',
      component: () => import('/@/views/dashboard/monitor.vue'),
      meta: { title: t('router.dashboard.monitor'), icon: 'ep:platform' },
    },
    {
      name: 'dashboard_workplace',
      path: 'workplace',
      component: () => import('/@/views/dashboard/workplace.vue'),
      meta: { title: t('router.dashboard.workplace'), icon: 'ep:platform' },
    },
  ],
} as AppRouteRecordRaw;
