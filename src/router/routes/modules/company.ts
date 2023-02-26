import { AppRouteRecordRaw } from '/#/route';
import { t } from '/@/hooks/web/useI18n';
import { getParentLayout, LAYOUT } from '/@/router/constant';

export default [
  {
    name: 'company',
    path: '/company',
    component: LAYOUT,
    redirect: '/company/index',
    meta: { title: t('router.company.company'), orderNo: 1 },
    children: [
      {
        name: 'company_index',
        path: 'index',
        component: () => import('/@/views/business/company/index.vue'),
        meta: { title: t('router.company.index'), icon: 'ant-design:ant-design-outlined' }
      },
      {
        name: 'company_crc',
        path: 'crc',
        meta: { title: t('router.company.crc.index'), icon: 'ant-design:ant-design-outlined' },
        redirect: '/company/crc/personnel',
        component: getParentLayout('company_crc'),
        children: [
          {
            name: 'company_crc_personnel',
            path: 'personnel',
            component: () => import('/@/views/business/company/crc/personnel.vue'),
            meta: {
              title: t('router.company.crc.personnel'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'company_crc_project',
            path: 'project',
            component: () => import('/@/views/business/company/crc/project.vue'),
            meta: {
              title: t('router.company.crc.project'),
              icon: 'ant-design:ant-design-outlined'
            }
          }
        ]
      },
      {
        name: 'company_project',
        path: 'project',
        component: () => import('/@/views/business/company/project/index.vue'),
        meta: { title: t('router.company.project.index'), icon: 'ant-design:ant-design-outlined' }
      },
      {
        name: 'company_cooperation',
        path: 'cooperation',
        meta: {
          title: t('router.company.cooperation.index'),
          icon: 'ant-design:ant-design-outlined'
        },
        redirect: '/company/cooperation/sponsor',
        children: [
          {
            name: 'company_cooperation_sponsor',
            path: 'sponsor',
            component: () => import('/@/views/business/company/cooperation/sponsor.vue'),
            meta: {
              title: t('router.company.cooperation.sponsor'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'company_cooperation_smo',
            path: 'smo',
            component: () => import('/@/views/business/company/cooperation/smo.vue'),
            meta: {
              title: t('router.company.cooperation.smo'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'company_cooperation_site',
            path: 'site',
            component: () => import('/@/views/business/company/cooperation/site.vue'),
            meta: {
              title: t('router.company.cooperation.site'),
              icon: 'ant-design:ant-design-outlined'
            }
          }
        ]
      },
      {
        name: 'company_statistics',
        path: 'statistics',
        component: getParentLayout('company_statistics'),
        meta: {
          title: t('router.company.statistics.index'),
          icon: 'ant-design:ant-design-outlined'
        },
        children: [
          {
            name: 'company_statistics_crc',
            path: 'crc',
            component: () => import('/@/views/business/company/statistics/crc.vue'),
            meta: {
              title: t('router.company.statistics.crc'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'company_statistics_crc_resume',
            path: 'crc_resume',
            component: () => import('/@/views/business/company/statistics/crc_resume.vue'),
            meta: {
              title: t('router.company.statistics.crc_resume'),
              icon: 'ant-design:ant-design-outlined'
            }
          },
          {
            name: 'company_statistics_project',
            path: 'project',
            component: () => import('/@/views/business/company/statistics/project.vue'),
            meta: {
              title: t('router.company.statistics.project'),
              icon: 'ant-design:ant-design-outlined'
            }
          }
        ]
      }
    ]
  }
] as AppRouteRecordRaw[];
