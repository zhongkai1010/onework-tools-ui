import { OwRouteRecordRaw } from '../router/types';
import { HeaderMenu } from './types';

export const getHeaderMenus = (routes: OwRouteRecordRaw[], parent?: HeaderMenu): HeaderMenu[] => {
  const menus = [] as HeaderMenu[];
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    const menu = {} as HeaderMenu;
    if (!route.name) {
      throw new Error('route name is null');
    }
    menu.title = (route.meta?.title || route.name) as string;
    menu.icon = (route.meta?.icon || 'ep:element-plus') as string;
    if (parent) {
      menu.path = `${parent.path}/${route.path}`;
    } else {
      menu.path = route.path;
    }
    if (route.children) {
      menu.children = getHeaderMenus(route.children, menu);
    }
    menus.push(menu);
  }
  return menus;
};
