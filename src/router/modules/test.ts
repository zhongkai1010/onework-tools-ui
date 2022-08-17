import { AppRouteRecordRaw } from '/#/route';

export default {
  name: 'test',
  path: '/test',
  component: () => import('/@/views/test/index.vue'),
  meta: { title: '测试', hideMenu: true },
} as AppRouteRecordRaw;
