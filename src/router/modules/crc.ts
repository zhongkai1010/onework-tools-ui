import { LAYOUT, EMPTY_LAYOUT } from '../constant';
import { AppRouteRecordRaw } from '/#/route';
import { t } from '/@/hooks/web/useI18n';

export default [
  {
    name: 'crc',
    path: '/crc',
    component: LAYOUT,
    redirect: '/crc/index',
    meta: { title: t('router.crc.crc'), orderNo: 1 },
    children: [
      {
        name: 'crc_index',
        path: 'index',
        component: () => import('/@/views/crc/index.vue'),
        meta: { title: t('router.crc.index'), icon: 'ant-design:ant-design-outlined' }
      },
      {
        name: 'crc_work',
        path: 'work',
        meta: { title: t('router.crc.work.index'), icon: 'ant-design:ant-design-outlined' },
        redirect: '/crc/entry',
        component: EMPTY_LAYOUT,
        children: [
          {
            name: 'crc_work_entry',
            path: 'entry',
            component: () => import('/@/views/crc/work/entry.vue'),
            meta: { title: t('router.crc.work.entry'), icon: 'ant-design:ant-design-outlined' }
          },
          {
            name: 'crc_work_eproject',
            path: 'project',
            component: () => import('/@/views/crc/work/project.vue'),
            meta: { title: t('router.crc.work.project'), icon: 'ant-design:ant-design-outlined' }
          },
          {
            name: 'crc_work_project_audi',
            path: 'project_audi',
            component: () => import('/@/views/crc/work/project_audi.vue'),
            meta: {
              title: t('router.crc.work.project_audi'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'crc_work_report',
            path: 'report',
            component: () => import('/@/views/crc/work/report.vue'),
            meta: { title: t('router.crc.work.report'), icon: 'ant-design:ant-design-outlined' }
          },
          {
            name: 'crc_work_training',
            path: 'training',
            component: () => import('/@/views/crc/work/training.vue'),
            meta: { title: t('router.crc.work.training'), icon: 'ant-design:ant-design-outlined' }
          },
          {
            name: 'crc_work_examine',
            path: 'examine',
            component: () => import('/@/views/crc/work/examine.vue'),
            meta: { title: t('router.crc.work.examine'), icon: 'ant-design:ant-design-outlined' }
          },
          {
            name: 'crc_work_appointment',
            path: 'appointment',
            component: () => import('/@/views/crc/work/appointment.vue'),
            meta: {
              title: t('router.crc.work.appointment'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'crc_work_badge',
            path: 'badge',
            component: () => import('/@/views/crc/work/badge.vue'),
            meta: { title: t('router.crc.work.badge'), icon: 'ant-design:ant-design-outlined' }
          }
        ]
      },
      {
        name: 'crc_personal',
        path: 'personal',
        meta: { title: t('router.crc.personal.index'), icon: 'ant-design:ant-design-outlined' },
        redirect: '/crc/personal/archives',
        component: EMPTY_LAYOUT,
        children: [
          {
            name: 'crc_personal_archives',
            path: 'archives',
            component: () => import('/@/views/crc/personal/archives.vue'),
            meta: {
              title: t('router.crc.personal.archives'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'crc_personal_record',
            path: 'record',
            component: () => import('/@/views/crc/personal/record.vue'),
            meta: {
              title: t('router.crc.personal.record'),
              icon: 'ant-design:ant-design-outlined'
            }
          }
        ]
      }
    ]
  }
] as AppRouteRecordRaw[];
