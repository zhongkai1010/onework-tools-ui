import { LAYOUT } from '../constant';
import { t } from '/@/hooks/web/useI18n';

export default {
  name: 'platform',
  path: '/platform',
  component: LAYOUT,
  redirect: '/platform/application',
  meta: { title: t('router.platform.platform'), orderNo: 5, icon: 'ep:platform' },
  children: [
    {
      name: 'platform_application',
      path: 'application',
      component: () => import('/@/views/platform/application.vue'),
      meta: { title: t('router.platform.application'), icon: 'ep:platform' }
    }
  ]
};
