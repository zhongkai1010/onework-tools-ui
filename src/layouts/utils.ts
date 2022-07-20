import { NavRecordRaw } from "./types";
import { mock } from "mockjs";
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
        parent: parent ? parent.name : undefined,
        icon: child.meta.icon,
        iframeSrc: child.meta.frameSrc,
        islink: child.meta.isLink,
        cache: child.meta.ignoreKeepAlive,
        system: false
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
  const childrenProcess = (childs: NavRecordRaw[], parent?: NavRecordRaw) => {
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

interface TabOperateItem {
  text: string;
  icon: string;
  command: "other" | "left" | "right" | "all" | "refresh";
}

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

export const getTabs = (count = 20): Tab[] => {
  const tabs = mock({
    "tabs|100": [
      {
        label: "@cword(2,4)",
        name: "@url",
        "icon|+1": [
          "ant-design:audio-outlined",
          "ant-design:android-filled",
          "ant-design:alipay-square-filled"
        ]
      }
    ]
  }).tabs as Tab[];
  return tabs.slice(count);
};

export const getMenus = (): { selectPath: string; menus: Menu[] } => {
  let selectPath: string;
  const menus: Menu[] = mock({
    "tabs|20": [
      {
        title: "@cword(2,4)",
        path: "@url",
        "icon|+1": [
          "ant-design:audio-outlined",
          "ant-design:android-filled",
          "ant-design:alipay-square-filled"
        ]
      }
    ]
  }).tabs;
  for (let index = 0; index < menus.length; index++) {
    if (index % 3 === 0) {
      menus[index].children = mock({
        "data|1-3": [
          {
            title: "@cword(2,4)",
            path: "@url",
            "icon|+1": [
              "ant-design:audio-outlined",
              "ant-design:android-filled",
              "ant-design:alipay-square-filled"
            ]
          }
        ]
      }).data;
    }
    if (index == 6) {
      selectPath = menus[index].children[0].path;
    }
  }
  return { selectPath, menus };
};
