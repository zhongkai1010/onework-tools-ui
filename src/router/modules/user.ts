import { LAYOUT } from '../constant';

export default {
  name: 'user',
  path: '/user',
  component: LAYOUT,
  redirect: '/user/index',
  children: [
    {
      name: 'user_index',
      path: 'index',
      component: () => import('../../views/user/index.vue'),
      meta: { title: '用户管理', icon: 'material-symbols:3p' },
    },
  ],
};
