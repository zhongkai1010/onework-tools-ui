import { LAYOUT } from '../constant';
import { AppRouteRecordRaw } from '/#/route';
import { t } from '/@/hooks/web/useI18n';

export default [
  {
    name: 'user',
    path: '/user',
    component: LAYOUT,
    redirect: '/user/config',
    meta: { title: t('router.user.user'), orderNo: 1 },
    children: [
      {
        name: 'user_config',
        path: 'config',
        component: () => import('/@/views/user/config.vue'),
        meta: { title: t('router.user.config'), icon: 'ant-design:ant-design-outlined' }
      },
      {
        name: 'user_message',
        path: 'message',
        component: () => import('/@/views/user/message.vue'),
        meta: { title: t('router.user.message'), icon: 'ant-design:ant-design-outlined' }
      },
      {
        name: 'user_logs',
        path: 'logs',
        component: () => import('/@/views/user/logs.vue'),
        meta: { title: t('router.user.logs'), icon: 'ant-design:ant-design-outlined' }
      }
    ]
  }
] as AppRouteRecordRaw[];
