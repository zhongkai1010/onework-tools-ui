import { AppRouteRecordRaw } from '/#/route';

/**
 * 通过vite import.meta.globEager特性将modules目录文件转换集合
 *
 * @returns RouteRecordRaw[]
 */
const getModuleRoutes = (): AppRouteRecordRaw[] => {
  const modulePages = import.meta.globEager('./modules/*.ts');
  const moduleRoutes: AppRouteRecordRaw[] = [];

  Object.keys(modulePages).forEach((key) => {
    const mod = modulePages[key].default || {};
    const modList = (Array.isArray(mod) ? [...mod] : [mod]) as AppRouteRecordRaw[];
    moduleRoutes.push(...modList);
  });
  return moduleRoutes;
};

/**
 *
 * @returns 返回以"fullPath"为"key"的route 对象
 */
const getRouteMap = (routes: AppRouteRecordRaw[]): { [key: string]: AppRouteRecordRaw } => {
  const result = {};
  const childrenProcess = (childs: AppRouteRecordRaw[], parent?: AppRouteRecordRaw) => {
    childs.forEach((value) => {
      let path = value.path;
      if (parent) {
        path = `${parent.path}/${value.path}`;
      }
      result[path] = value;
      if (value.children) {
        childrenProcess(value.children, value);
      }
    });
  };
  childrenProcess(routes);
  return result;
};

export { getModuleRoutes, getRouteMap };
