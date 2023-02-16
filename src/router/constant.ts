import { AppRouteRecordRaw } from '/#/route';

export const LAYOUT = () => import('/@/layouts/index.vue');

export const EMPTY_LAYOUT = () => import('/@/layouts/EmptyLayout.vue');

export const FRAME_VIEW = () => import('../components/PageView/src/FrameView.vue');

import { t } from '/@/hooks/web/useI18n';

export const LOGIN_PAGE = {
  name: 'login',
  path: '/login',
  component: () => import('/@/views/login/index.vue'),
  meta: {
    title: t('common.login')
  }
};

export const NOT_PAGE = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('/@/views/404.vue')
};

export const HOME_PAGE = {
  name: 'root',
  path: '/',
  redirect: '/dashboard/analysis',
  meta: {
    title: t('common.home'),
    icon: 'ant-design:home-outlined'
  }
} as AppRouteRecordRaw;

export const ROUTER_WHITE_LIST = ['/login', '/test'] as string[];
