import dayjs from 'dayjs';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { LOGIN_PAGE, NOT_PAGE, HOME_PAGE, ROUTER_WHITE_LIST } from '../router/constant';

import { getModuleRoutes } from './utils';

import { useI18n } from '/@/hooks/web/useI18n';

import { pageStateStoreHook } from '/@/store/modules/pageState';
import { userStateStoreHook } from '/@/store/modules/userState';
import { siteConfigStoreHook } from '/@/store/modules/globalConfig';

// nprogress
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { DEFAULT_TITLE } from '../settings/constant';
import { App } from 'vue';

/**
 * 遍历modules目录，获取RouteRecordRaw集合
 */
const moduleRoutes = getModuleRoutes();

/**
 * routes 集合
 */
const routes = [LOGIN_PAGE, ...moduleRoutes, HOME_PAGE, NOT_PAGE];
/**
 * router
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[],
});
/**
 * 页面头部加载进度条
 */
router.beforeEach((to, from, next) => {
  const log = `----------------start load route  ${dayjs().format('YYYY-MM-DD HH:mm:ss')} from:"${
    from.fullPath
  }" to:"${to.fullPath}"----------------`;
  console.log(log);

  const { login } = userStateStoreHook();
  const { showProgress } = siteConfigStoreHook();
  const pageState = pageStateStoreHook();

  //layout 加载状态
  pageState.setLoading('router', true);
  // 白名单
  if (ROUTER_WHITE_LIST.includes(to.fullPath)) {
    if (showProgress) {
      NProgress.start();
    }
    next();
  } else {
    if (showProgress) {
      NProgress.start();
    }
    // 验证登录状态
    if (!login && to.path != LOGIN_PAGE.path) {
      next({ name: LOGIN_PAGE.name });
    } else {
      next();
    }
  }
});
router.afterEach((to, from) => {
  const log = `----------------end load route ${dayjs().format('YYYY-MM-DD HH:mm:ss')} from:"${
    from.fullPath
  }" to:"${to.fullPath}"----------------`;
  console.log(log);

  const { t } = useI18n();
  const pageState = pageStateStoreHook();

  // layout 加载状态
  pageState.setLoading('router', false);
  // 进度条
  const { showProgress } = siteConfigStoreHook();
  if (showProgress) {
    NProgress.done();
  }
  document.title = `${DEFAULT_TITLE} - ${t(to.meta.title)}`;
});

router.onError((error: any) => {
  console.log(`-----------route end error---------------`, error);

  router.push({ name: LOGIN_PAGE.name });
});

function setupRouter(app: App<Element>) {
  app.use(router);
}

export { routes, router, setupRouter };
