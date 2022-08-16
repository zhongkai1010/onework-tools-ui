import { LAYOUT } from '../constant';
import { AppRouteRecordRaw } from '/#/route';
import { t } from '/@/hooks/web/useI18n';

export default [
  {
    name: 'process',
    path: '/process',
    component: LAYOUT,
    redirect: '/process/management',
    meta: { title: t('router.process.process'), icon: 'clarity:flow-chart-line', orderNo: 3 },
    children: [
      {
        name: 'flow_management',
        path: 'management',
        component: () => import('/@/views/process/management.vue'),
        meta: { title: t('router.process.management'), icon: 'ant-design:ant-design-outlined' },
      },
      {
        name: 'flow_design',
        path: 'design',
        component: () => import('/@/views/process/design.vue'),
        meta: { title: t('router.process.design'), icon: 'ant-design:ant-design-outlined' },
      },
      {
        name: 'process_monitor',
        path: 'monitor',
        component: () => import('/@/views/process/monitor.vue'),
        meta: { title: t('router.process.monitor'), icon: 'ant-design:monitor-outlined' },
      },
      {
        name: 'flow_expression',
        path: 'expression',
        component: () => import('/@/views/process/expression.vue'),
        meta: { title: t('router.process.expression'), icon: 'ooui:search-regular-expression' },
      },
      {
        name: 'flow_form',
        path: 'form',
        component: () => import('/@/views/process/form.vue'),
        meta: { title: t('router.process.form'), icon: 'ant-design:form-outlined' },
      },
    ],
  },
] as AppRouteRecordRaw[];
