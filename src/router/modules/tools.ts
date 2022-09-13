import { LAYOUT } from '../constant';
import { AppRouteRecordRaw } from '/#/route';
import { t } from '/@/hooks/web/useI18n';

export default [
  {
    name: 'tool',
    path: '/tool',
    redirect: '/tool/model',
    component: LAYOUT,
    meta: { title: t('router.tool.tool'), orderNo: 7, icon: 'carbon:tool-kit' },
    children: [
      {
        name: 'tool_model',
        path: 'model',
        component: () => import('/@/views/tool/model/index.vue'),
        meta: { title: t('router.tool.model'), icon: 'material-symbols:3p' }
      },
      {
        name: 'tool_translate',
        path: 'translate',
        component: () => import('/@/views/tool/translate.vue'),
        meta: { title: t('router.tool.translate'), icon: 'material-symbols:3p' }
      },
      {
        name: 'tool_generator',
        path: 'generator',
        component: () => import('/@/views/tool/generator.vue'),
        meta: { title: t('router.tool.generator'), icon: 'material-symbols:3p' }
      },
      {
        name: 'tool_page',
        path: 'page',
        component: () => import('/@/views/tool/page.vue'),
        meta: { title: t('router.tool.page'), icon: 'material-symbols:3p' }
      }
    ]
  }
] as AppRouteRecordRaw[];
