import { RouteRecordRaw } from "vue-router";
import { moduleRoutes } from "../../../router/index";
import _ from "lodash";

const routeConvertMenu = (routes: RouteRecordRaw[]): Menu[] => {
  const menus = [] as Menu[];
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    const menu = {} as Menu;
    if (!route.name) {
      throw new Error("route name is null");
    }
    if (_.find(menus, t => t.index == route.name)) {
      throw new Error("route name is repeat");
    }
    menu.index = route.name as string;
    menu.title = (route.meta?.title || route.name) as string;
    menu.order = index;
    menu.icon = (route.meta?.icon || "ep:element-plus") as string;
    menu.path = route.path;
    if (route.children) {
      menu.children = routeConvertMenu(route.children);
    }
    menus.push(menu);
  }
  return menus;
};

const menus = routeConvertMenu(moduleRoutes);

export { menus, routeConvertMenu };
