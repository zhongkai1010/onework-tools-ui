import { getParentLayout, LAYOUT } from '/@/router/constant';
import { AppRouteRecordRaw } from '/#/route';
import { t } from '/@/hooks/web/useI18n';

export default [
  {
    name: 'manage',
    path: '/manage',
    component: LAYOUT,
    redirect: '/manage/index',
    meta: { title: t('router.manage.manage'), orderNo: 1 },
    children: [
      {
        name: 'manage_index',
        path: 'index',
        component: () => import('/@/views/business/manage/index.vue'),
        meta: { title: t('router.manage.index'), icon: 'ant-design:ant-design-outlined' }
      },
      {
        name: 'manage_site_index',
        path: 'site',
        component: () => import('/@/views/business/manage/site/index.vue'),
        meta: { title: t('router.manage.site.index'), icon: 'ant-design:ant-design-outlined' }
      },
      {
        name: 'manage_company_index',
        path: 'company',
        component: () => import('/@/views/business/manage/company/index.vue'),
        meta: { title: t('router.manage.company.index'), icon: 'ant-design:monitor-outlined' }
      },
      {
        name: 'manage_statistics',
        path: 'statistics',
        meta: {
          title: t('router.manage.statistics.index'),
          icon: 'ooui:search-regular-expression',
          redirect: '/manage/statistics/project'
        },
        component: getParentLayout('manage_statistics'),
        children: [
          {
            name: 'manage_statistics_project',
            path: 'project',
            component: () => import('/@/views/business/manage/statistics/project.vue'),
            meta: {
              title: t('router.manage.statistics.project'),
              icon: 'ant-design:monitor-outlined'
            }
          },
          {
            name: 'manage_statistics_site',
            path: 'site',
            component: () => import('/@/views/business/manage/statistics/site.vue'),
            meta: {
              title: t('router.manage.statistics.site'),
              icon: 'ant-design:monitor-outlined'
            }
          },
          {
            name: 'manage_statistics_crc',
            path: 'crc',
            component: () => import('/@/views/business/manage/statistics/crc.vue'),
            meta: {
              title: t('router.manage.statistics.crc'),
              icon: 'ant-design:monitor-outlined'
            }
          },
          {
            name: 'manage_statistics_company',
            path: 'company',
            component: () => import('/@/views/business/manage/statistics/company.vue'),
            meta: {
              title: t('router.manage.statistics.company'),
              icon: 'ant-design:monitor-outlined'
            }
          }
        ]
      },
      {
        name: 'manage_dictionary_index',
        path: 'dictionary',
        component: () => import('/@/views/business/manage/dictionary/index.vue'),
        meta: { title: t('router.manage.dictionary.index'), icon: 'ant-design:monitor-outlined' }
      },
      {
        name: 'manage_portal',
        path: 'portal',
        meta: {
          title: t('router.manage.portal.index'),
          icon: 'ooui:search-regular-expression',
          redirect: '/manage/portal/index'
        },
        component: getParentLayout('manage_portal'),
        children: [
          {
            name: 'manage_portal_notice',
            path: 'notice',
            component: () => import('/@/views/business/manage/portal/notice.vue'),
            meta: {
              title: t('router.manage.portal.notice'),
              icon: 'ant-design:monitor-outlined'
            }
          },
          {
            name: 'manage_portal_news',
            path: 'news',
            component: () => import('/@/views/business/manage/portal/news.vue'),
            meta: {
              title: t('router.manage.portal.news'),
              icon: 'ant-design:monitor-outlined'
            }
          },
          {
            name: 'manage_portal_site_news',
            path: 'site_news',
            component: () => import('/@/views/business/manage/portal/site_news.vue'),
            meta: {
              title: t('router.manage.portal.site_news'),
              icon: 'ant-design:monitor-outlined'
            }
          },
          {
            name: 'manage_portal_site_video',
            path: 'video',
            component: () => import('/@/views/business/manage/portal/training_video.vue'),
            meta: {
              title: t('router.manage.portal.video'),
              icon: 'ant-design:monitor-outlined'
            }
          },
          {
            name: 'manage_portal_site_expert',
            path: 'expert',
            component: () => import('/@/views/business/manage/portal/expert.vue'),
            meta: {
              title: t('router.manage.portal.expert'),
              icon: 'ant-design:monitor-outlined'
            }
          }
        ]
      }
    ]
  }
] as AppRouteRecordRaw[];
