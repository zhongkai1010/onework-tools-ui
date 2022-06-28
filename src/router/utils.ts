import { OwRouteRecordRaw } from "./types";

/**
 * 通过vite import.meta.globEager特性将modules目录文件转换集合
 *
 * @returns RouteRecordRaw[]
 */
const getModuleRoutes = (): OwRouteRecordRaw[] => {
  const modulePages = import.meta.globEager("./modules/*.ts");
  const moduleRoutes: OwRouteRecordRaw[] = [];

  Object.keys(modulePages).forEach(key => {
    const mod = modulePages[key].default || {};
    const modList = (Array.isArray(mod) ? [...mod] : [mod]) as OwRouteRecordRaw[];
    moduleRoutes.push(...modList);
  });
  return moduleRoutes;
};

/**
 *
 * @returns 返回已路径为key的route集合
 */
const getRouteMap = (): { [key: string]: OwRouteRecordRaw } => {
  const result = {};
  const records = getModuleRoutes();
  const childrenProcess = (childs: OwRouteRecordRaw[], parent?: OwRouteRecordRaw) => {
    childs.forEach(value => {
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
  childrenProcess(records);
  return result;
};

export { getModuleRoutes, getRouteMap };
