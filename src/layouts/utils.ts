import { getModuleRoutes } from '../router/utils';
import { useI18n } from '/@/hooks/web/useI18n';
import { MenuRecordRaw } from '/@/layouts/types';
import { AppRouteRecordRaw } from '/#/route';

const { t } = useI18n();

export const getNavRecordRaw = (): MenuRecordRaw[] => {
  const routes: AppRouteRecordRaw[] = getModuleRoutes();
  const getSubNav = (childs: AppRouteRecordRaw[], parent?: MenuRecordRaw): MenuRecordRaw[] => {
    const records: MenuRecordRaw[] = [];
    for (let i = 0; i < childs.length; i++) {
      const child = childs[i];
      if (child.meta && !child.meta.hideMenu) {
        const nav = routeToNavRecordRaw(child, parent);
        if (child.children) {
          nav.children = getSubNav(child.children, nav);
        }
        records.push(nav);
      }
    }
    return records;
  };
  const navs = getSubNav(routes);
  return navs.sort((t1, t2) => t1.order - t2.order);
};

export const getNavRecordRawMap = (nas: MenuRecordRaw[]): { [key: string]: MenuRecordRaw } => {
  const result = {};
  const childrenProcess = (childs: MenuRecordRaw[]) => {
    childs.forEach((value) => {
      result[value.path] = value;
      if (value.children) {
        childrenProcess(value.children);
      }
    });
  };
  childrenProcess(nas);
  return result;
};
8;

export const routeToNavRecordRaw = (
  route: AppRouteRecordRaw,
  parent?: MenuRecordRaw,
): MenuRecordRaw => {
  const nav: MenuRecordRaw = {
    order: route.meta?.orderNo,
    name: route.name,
    title: t(route.meta.title),
    path: parent ? `${parent.path}/${route.path}` : route.path,
    paths: parent ? [...parent.paths, `${parent.path}/${route.path}`] : [route.path],
    parentPath: parent ? parent.path : undefined,
    icon: route.meta.icon ?? 'carbon:page-break',
    frameSrc: route.meta.frameSrc,
    link: route.meta.link,
    cache: route.meta.keepAlive,
    redirect: route.redirect as string,
    hideMenu: route.meta.hideMenu,
  };
  return nav;
};
