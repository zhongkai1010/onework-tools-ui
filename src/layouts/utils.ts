import { OwRouteRecordRaw } from "../router/types";
import { HeaderMenu } from "./types";
import { mock } from "mockjs";

export const getHeaderMenus = (routes: OwRouteRecordRaw[], parent?: HeaderMenu): HeaderMenu[] => {
  const menus = [] as HeaderMenu[];
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    const menu = {} as HeaderMenu;
    if (!route.name) {
      throw new Error("route name is null");
    }
    menu.title = (route.meta?.title || route.name) as string;
    menu.icon = (route.meta?.icon || "ep:element-plus") as string;
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
