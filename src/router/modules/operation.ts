import { EMPTY_LAYOUT, LAYOUT } from '../constant';
import { AppRouteRecordRaw } from '/#/route';
import { t } from '/@/hooks/web/useI18n';

export default [
  {
    name: 'operation',
    path: '/operation',
    redirect: '/operation/database',
    meta: { title: t('router.operation.operation'), icon: 'akar-icons:file', orderNo: 6 },
    component: LAYOUT,
    children: [
      {
        name: 'operation_database',
        path: 'database',
        component: () => import('/@/views/operation/database.vue'),
        meta: { title: t('router.operation.database'), icon: 'akar-icons:file' }
      },
      {
        name: 'operation_file',
        path: 'file',
        component: () => import('/@/views/operation/file.vue'),
        meta: { title: t('router.operation.file'), icon: 'akar-icons:file' }
      },
      {
        name: 'operation_interface',
        path: 'interface',
        component: () => import('/@/views/operation/interface.vue'),
        meta: { title: t('router.operation.interface'), icon: 'akar-icons:file' }
      },
      {
        name: 'operation_message',
        path: 'message',
        meta: { title: t('router.operation.message.message'), icon: 'akar-icons:file' },
        redirect: '/operation/message/log',
        component: EMPTY_LAYOUT,
        children: [
          {
            name: 'operation_message_log',
            path: 'log',
            component: () => import('/@/views/operation/message/log.vue'),
            meta: { title: t('router.operation.message.log'), icon: 'akar-icons:file' }
          },
          {
            name: 'operation_message_template',
            path: 'template',
            component: () => import('/@/views/operation/message/template.vue'),
            meta: { title: t('router.operation.message.template'), icon: 'akar-icons:file' }
          }
        ]
      }
    ]
  }
] as AppRouteRecordRaw[];
