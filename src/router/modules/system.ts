import { EMPTY_LAYOUT, LAYOUT } from '../constant';
import { AppRouteRecordRaw } from '/#/route';
import { t } from '/@/hooks/web/useI18n';

export default [
  {
    name: 'system',
    path: '/system',
    redirect: '/system/role',
    component: LAYOUT,
    meta: { title: t('router.system.system'), icon: 'ic:sharp-manage-accounts', orderNo: 2 },
    children: [
      {
        name: 'system_page',
        path: 'page',
        component: () => import('/@/views/system/page.vue'),
        meta: { title: t('router.system.page'), icon: 'iconoir:journal-page' },
      },
      {
        name: 'system_user',
        path: 'user',
        component: () => import('/@/views/system/user.vue'),
        meta: {
          title: t('router.system.user'),
          icon: 'ant-design:user-outlined',
          keepAlive: true,
        },
      },
      {
        name: 'system_role',
        path: 'role',
        component: () => import('/@/views/system/role.vue'),
        meta: { title: t('router.system.role'), icon: 'carbon:user-role' },
      },
      {
        name: 'system_menu',
        path: 'menu',
        component: () => import('/@/views/system/navigation.vue'),
        meta: { title: t('router.system.menu'), icon: 'ant-design:menu-outlined' },
      },
      {
        name: 'system_department',
        path: 'department',
        component: () => import('/@/views/system/department.vue'),
        meta: { title: t('router.system.department'), icon: 'bi:postcard' },
      },
      {
        name: 'system_post',
        path: 'post',
        component: () => import('/@/views/system/post.vue'),
        meta: { title: t('router.system.post'), icon: 'eos-icons:job' },
      },
      {
        name: 'system_dictionary',
        path: 'dictionary',
        redirect: '/system/dictionary/single',
        meta: { title: t('router.system.dictionary.dictionary'), icon: 'arcticons:dictionary' },
        component: EMPTY_LAYOUT,
        children: [
          {
            name: 'system_dictionary_single',
            path: 'single',
            component: () => import('/@/views/system/dictionary/single.vue'),
            meta: { title: t('router.system.dictionary.single'), icon: 'arcticons:dictionary' },
          },
          {
            name: 'system_dictionary_multiple',
            path: 'multiple',
            component: () => import('/@/views/system/dictionary/multiple.vue'),
            meta: { title: t('router.system.dictionary.multiple'), icon: 'arcticons:dictionary' },
          },
        ],
      },
      {
        name: 'system_config',
        path: 'config',
        component: () => import('/@/views/system/config.vue'),
        meta: { title: t('router.system.config'), icon: 'codicon:symbol-parameter' },
      },
      {
        name: 'system_notice',
        path: 'notice',
        component: () => import('/@/views/system/notice.vue'),
        meta: { title: t('router.system.notice'), icon: 'fe:notice-active' },
      },
      {
        name: 'system_log',
        path: 'log',
        redirect: '/system/log/operate',
        meta: { title: t('router.system.system'), icon: 'codicon:symbol-parameter' },
        component: EMPTY_LAYOUT,
        children: [
          {
            name: 'system_log_operate',
            path: 'operate',
            component: () => import('/@/views/system/log/operate.vue'),
            meta: { title: t('router.system.log.operate'), icon: 'radix-icons:activity-log' },
          },
          {
            name: 'system_log_login',
            path: 'login',
            component: () => import('/@/views/system/log/login.vue'),
            meta: { title: t('router.system.log.login'), icon: 'ant-design:login-outlined' },
          },
        ],
      },
    ],
  },
] as AppRouteRecordRaw[];
