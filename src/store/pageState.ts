import { defineStore } from "pinia";
import { useRoute } from "vue-router";
import { NavRecordRaw } from "../layouts/types";
import { getNavRecordRaw, getNavRecordRawMap } from "../layouts/utils";
import { HOME_PAGE } from "../router/constant";
import { store } from "./index";
import { getFirstNavMenu } from "./utils";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id

const pageStateStore = defineStore({
  id: "page-state",
  state: (): {
    selectNav?: string;
    selectTab: string;
    selectMenu: string;
    tabs: NavRecordRaw[];
    menufold: boolean;
    showDrawer: boolean;
    menus: NavRecordRaw[];
    menuMap: { [key: string]: NavRecordRaw };
    tabTool: {
      x: number;
      y: number;
      show: boolean;
      name?: string;
    };
  } => {
    const route = useRoute();
    const menus = getNavRecordRaw();
    const menuMap = getNavRecordRawMap(menus);
    const menu = menuMap[route.fullPath];
    const selectNav = menu.paths[0];
    const selectMenu = menu.path;
    return {
      selectMenu,
      selectNav,
      selectTab: menu.path,
      tabs: [menu],
      menufold: false,
      showDrawer: false,
      menus,
      menuMap,
      tabTool: {
        x: 0,
        y: 0,
        show: false
      }
    };
  },
  getters: {
    rootNavs(): NavRecordRaw[] {
      const navs = this.menus as NavRecordRaw[];
      return Object.values(navs)
        .filter(t => !t.parentPath)
        .sort((a, b) => a.order - b.order);
    },
    getNavMenus(): NavRecordRaw[] {
      const menus = this.menus as NavRecordRaw[];
      const rootMenu = menus.find(t => t.path === this.selectNav);
      return rootMenu.children || [];
    },
    breadcrumbNavs(): NavRecordRaw[] {
      const nav: NavRecordRaw = this.menuMap[this.selectMenu];
      return nav.paths.map(t => this.menuMap[t]);
    }
  },
  actions: {
    setValue(type: string, value: any) {
      this[type] = value;
    },
    setSelectNav(path: string) {
      // 左侧nav区域选中
      const nav: NavRecordRaw = this.menuMap[path];
      if (!nav) return;
      this.selectNav = path;
      // 左侧menu区域选中
      const selectNav = getFirstNavMenu(nav.children || []);
      if (selectNav) {
        this.selectMenu = selectNav.path;
        //tabs区域选中
        const tabs = this.tabs as NavRecordRaw[];
        const selectIndex = tabs.findIndex(t => t.path === selectNav.path);
        if (selectIndex < 0) {
          this.tabs.push(selectNav);
        }
        this.selectTab = selectNav.path;
      }
    },
    setSelectMenu(path: string) {
      const nav: NavRecordRaw = this.menuMap[path];
      if (!nav) return;
      this.selectMenu = path;
      // 左侧nav区域选中
      const rootNav = this.menuMap[nav.paths[0]];
      this.selectNav = rootNav.path;
      //tabs区域选中
      const tabs = this.tabs as NavRecordRaw[];
      const selectIndex = tabs.findIndex(t => t.path === path);
      if (selectIndex < 0) {
        this.tabs.push(nav);
      }
      this.selectTab = nav.path;
    },

    setSelectTab(path: string) {
      if (path === HOME_PAGE.path) {
        this.selectTab = path;
      } else {
        const nav: NavRecordRaw = this.menuMap[path];
        if (!nav) return;
        const rootNav = this.menuMap[nav.paths[0]];
        this.selectNav = rootNav.path;
        this.selectMenu = nav.path;
      }
    },
    closeTab(path: string) {
      const tabsLen = this.tabs.length;
      const index = this.tabs.findIndex(value => value.path === path);
      const maxIndex = tabsLen - 1;
      const afterIndex = index + 1;
      const foreIndex = index - 1;
      if (index === -1) {
        return;
      }
      if (tabsLen == 1) {
        this.tabs = [];
        this.selectTab = HOME_PAGE.path;
        return;
      }
      if (path === HOME_PAGE.path && index == 0) {
        return;
      } else {
        if (afterIndex <= maxIndex) {
          this.selectTab = this.tabs[afterIndex].path;
        } else {
          this.selectTab = this.tabs[foreIndex].path;
        }
      }
      this.tabs.splice(index, 1);
    },
    operateTab(type: "other" | "left" | "right" | "all", path: string) {
      const index = this.tabs.findIndex(value => value.path === path);
      const tab = this.tabs[index];
      if (index === -1) {
        this.tabs = [];
        this.selectTab = path;
        return;
      }
      switch (type) {
        case "other":
          this.tabs = [tab];
          this.selectTab = path;
          break;
        case "left":
          this.tabs.splice(0, index);
          this.selectTab = path;
          break;
        case "right":
          this.tabs.splice(index + 1);
          this.selectTab = path;
          break;
        case "all":
          this.tabs = [];
          this.selectTab = HOME_PAGE.path;
          break;
      }
    }
  }
});

export function pageStateStoreHook() {
  return pageStateStore(store);
}
