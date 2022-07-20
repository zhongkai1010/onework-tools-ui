import { defineStore } from "pinia";
import { useRoute } from "vue-router";
import { NavRecordRaw } from "../layouts/types";
import { getNavRecordRaw, getNavRecordRawMap } from "../layouts/utils";
import { store } from "./index";

export const defaultNav: NavRecordRaw = {
  name: "home",
  title: "主页",
  icon: "ant-design:home-outlined",
  path: "/",
  paths: ["/"]
};

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
const pageStateStore = defineStore({
  id: "page-state",
  state: (): {
    current: string;
    tabs: NavRecordRaw[];
    menufold: boolean;
    showDrawer: boolean;
    menus: NavRecordRaw[];
    menuMap: { [key: string]: NavRecordRaw };
  } => {
    const route = useRoute();
    const menus = getNavRecordRaw();
    return {
      current: route.fullPath,
      tabs: [],
      menufold: false,
      showDrawer: false,
      menus,
      menuMap: getNavRecordRawMap(menus)
    };
  },
  getters: {
    navs(): NavRecordRaw[] {
      const navs = this.menus as NavRecordRaw[];
      return Object.values(navs)
        .filter(t => !t.parent)
        .sort((a, b) => a.order - b.order);
    }
  },
  actions: {
    setValue(type: string, value: any) {
      this[type] = value;
    },
    setSelectTab(tab: NavRecordRaw | string) {
      const tabs = this.tabs as NavRecordRaw[];
      const tabOption =
        typeof tab === "object"
          ? tab
          : {
              name: tab
            };
      const name = tabOption.name;
      const index = tabs.findIndex((t: NavRecordRaw) => t.name == name);
      if (index < 0) {
        this.tabs.push(tabOption);
      }
      this.selectedTabName = name;
    },
    closeTab(name: string) {
      const tabsLen = this.tabs.length;
      const selectedName = this.selectedTabName;
      const index = this.tabs.findIndex(value => value.name === name);
      const maxIndex = tabsLen - 1;
      const afterIndex = index + 1;
      const foreIndex = index - 1;
      if (index === -1) {
        return;
      }
      if (tabsLen == 1) {
        this.tabs = [];
        this.selectedTabName = defaultNav.name;
        return;
      }
      if (name === selectedName && index == 0) {
        this.selectedTabName = defaultNav.name;
      } else {
        if (afterIndex <= maxIndex) {
          this.selectedTabName = this.tabs[afterIndex].name;
        } else {
          this.selectedTabName = this.tabs[foreIndex].name;
        }
      }
      this.tabs.splice(index, 1);
    },
    operateTab(type: "other" | "left" | "right" | "all", name: string) {
      const index = this.tabs.findIndex(value => value.name === name);
      const tab = this.tabs[index];
      if (index === -1) {
        this.tabs = [];
        this.selectedTabName = name;
        return;
      }
      switch (type) {
        case "other":
          this.tabs = [tab];
          this.selectedTabName = name;
          break;
        case "left":
          this.tabs.splice(0, index);
          this.selectedTabName = name;
          break;
        case "right":
          this.tabs.splice(index + 1);
          this.selectedTabName = name;
          break;
        case "all":
          this.tabs = [];
          this.selectedTabName = defaultNav.name;
          break;
      }
    }
  }
});

export function pageStateStoreHook() {
  return pageStateStore(store);
}
