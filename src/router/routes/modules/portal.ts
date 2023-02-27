import { getParentLayout } from '/@/router/constant';
import { AppRouteRecordRaw } from '/#/route';
import { t } from '/@/hooks/web/useI18n';

export default [
  {
    name: 'portal',
    path: '/portal',
    component: getParentLayout('portal'),
    redirect: '/portal/index',
    meta: { title: t('router.portal.portal'), orderNo: 1, hideMenu: true },
    children: [
      {
        name: 'portal_index',
        path: 'index',
        component: () => import('/@/views/business/portal/index.vue'),
        meta: {
          title: t('router.portal.index'),
          icon: 'ant-design:ant-design-outlined',
          affix: true
        }
      },
      {
        name: 'portal_about',
        path: 'about',
        component: () => import('/@/views/business/portal/about.vue'),
        meta: { title: t('router.portal.about'), icon: 'ant-design:ant-design-outlined' }
      },
      {
        name: 'portal_site',
        path: 'site',
        component: () => import('/@/views/business/portal/site.vue'),
        meta: { title: t('router.portal.site'), icon: 'ant-design:monitor-outlined' }
      },
      {
        name: 'portal_news',
        path: 'news',
        component: () => import('/@/views/business/portal/news.vue'),
        meta: { title: t('router.portal.news'), icon: 'ooui:search-regular-expression' }
      },
      {
        name: 'portal_site_news',
        path: 'news',
        component: () => import('/@/views/business/portal/site/news.vue'),
        meta: { title: t('router.portal.site.site_news'), icon: 'ooui:search-regular-expression' }
      },
      {
        name: 'portal_expert',
        path: 'expert',
        component: () => import('/@/views/business/portal/expert.vue'),
        meta: { title: t('router.portal.expert'), icon: 'ant-design:form-outlined' }
      },
      {
        name: 'portal_contact',
        path: 'contact',
        component: () => import('/@/views/business/portal/contact.vue'),
        meta: { title: t('router.portal.contact'), icon: 'ant-design:form-outlined' }
      }
    ]
  }
] as AppRouteRecordRaw[];
