import { LAYOUT } from '../constant';
import { AppRouteRecordRaw } from '/#/route';
import { t } from '/@/hooks/web/useI18n';

export default [
  {
    name: 'tools',
    path: '/tools',
    redirect: '/tools/model',
    component: LAYOUT,
    meta: { title: t('router.tool.tool'), orderNo: 7, icon: 'carbon:tool-kit' },
    children: [
      {
        name: 'tool_model',
        path: 'model',
        component: () => import('/@/views/tools/model/index.vue'),
        meta: { title: t('router.tool.model'), icon: 'material-symbols:3p' }
      },
      {
        name: 'tool_form',
        path: 'form',
        component: () => import('/@/views/tools/form/index.vue'),
        meta: { title: t('router.tool.form'), icon: 'material-symbols:3p' }
      },
      {
        name: 'tool_component',
        path: 'component',
        component: () => import('/@/views/tools/component/index.vue'),
        meta: { title: t('router.tool.component'), icon: 'material-symbols:3p' }
      },
      {
        name: 'tool_translate',
        path: 'translate',
        component: () => import('/@/views/tools/translate.vue'),
        meta: { title: t('router.tool.translate'), icon: 'material-symbols:3p' }
      },
      {
        name: 'tool_generator',
        path: 'generator',
        component: () => import('/@/views/tools/generator.vue'),
        meta: { title: t('router.tool.generator'), icon: 'material-symbols:3p' }
      },
      {
        name: 'tool_page',
        path: 'page',
        component: () => import('/@/views/tools/page.vue'),
        meta: { title: t('router.tool.page'), icon: 'material-symbols:3p' }
      }
    ]
  }
] as AppRouteRecordRaw[];
