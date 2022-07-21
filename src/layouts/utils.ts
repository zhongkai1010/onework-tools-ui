import { NavRecordRaw, TabOperateItem } from "./types";
import { OwRouteRecordRaw } from "../router/types";
import { getModuleRoutes } from "../router/utils";

export const getNavRecordRaw = (): NavRecordRaw[] => {
  const routes: OwRouteRecordRaw[] = getModuleRoutes();
  const getSubNav = (childs: OwRouteRecordRaw[], parent?: NavRecordRaw): NavRecordRaw[] => {
    const records: NavRecordRaw[] = [];
    for (let i = 0; i < childs.length; i++) {
      const child = childs[i];

      const nav: NavRecordRaw = {
        order: child.meta?.orderNo,
        name: child.name,
        title: child.meta.title,
        path: parent ? `${parent.path}/${child.path}` : child.path,
        paths: parent ? [...parent.paths, `${parent.path}/${child.path}`] : [child.path],
        parentPath: parent ? parent.path : undefined,
        icon: child.meta.icon ?? "carbon:page-break",
        iframeSrc: child.meta.frameSrc,
        islink: child.meta.isLink,
        cache: child.meta.ignoreKeepAlive,
        system: false,
        redirect: child.redirect as string
      };
      if (child.children) {
        nav.children = getSubNav(child.children, nav);
      }
      console.log("nav", nav);
      records.push(nav);
    }
    return records;
  };
  const navs = getSubNav(routes);
  return navs;
};

export const getNavRecordRawMap = (nas: NavRecordRaw[]): { [key: string]: NavRecordRaw } => {
  const result = {};
  const childrenProcess = (childs: NavRecordRaw[]) => {
    childs.forEach(value => {
      result[value.path] = value;
      if (value.children) {
        childrenProcess(value.children);
      }
    });
  };
  childrenProcess(nas);
  return result;
};

export const findElementParentId = (el: Element) => {
  if (el.id) {
    return el.id;
  } else {
    return findElementParentId(el.parentElement);
  }
};

export const tabOperateItems: TabOperateItem[] = [
  {
    text: "刷新",
    icon: "ant-design:sync-outlined",
    command: "refresh"
  },
  {
    text: "关闭其他",
    icon: "ant-design:close-outlined",
    command: "other"
  },
  {
    text: "关闭右侧",
    icon: "ant-design:arrow-right-outlined",
    command: "right"
  },
  {
    text: "关闭左侧",
    icon: "ant-design:arrow-left-outlined",
    command: "left"
  },
  {
    text: "关闭全部",
    icon: "ant-design:close-outlined",
    command: "all"
  }
];
export const layoutItems = [
  {
    value: "column",
    label: "分栏"
  },
  {
    value: "complex",
    label: "综合"
  },
  {
    value: "portrait",
    label: "纵向"
  },
  {
    value: "horizontal",
    label: "横向"
  },
  {
    value: "standard",
    label: "标准"
  },
  {
    value: "float",
    label: "浮动"
  }
];
export const menuWidthItems = [
  {
    value: "200px",
    label: "200px"
  },
  {
    value: "266px",
    label: "266px"
  },
  {
    value: "277px",
    label: "277px"
  },
  {
    value: "288px",
    label: "288px"
  }
];
export const avatarItems = [
  { text: "个人中心", command: "info" },
  { text: "退出系统", command: "quit" }
];
