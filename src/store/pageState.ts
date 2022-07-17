import { defineStore } from "pinia";
import { store } from "./index";

interface TabOption {
  name: string;
  icon?: string;
  text: string;
}

export const defaultTab: TabOption = {
  name: "/",
  icon: "ant-design:home-outlined",
  text: "主页"
};

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
const pageStateStore = defineStore({
  id: "ow-header-tabs",
  state: (): {
    routePaths: string[];
    tabs: TabOption[];
    menufold: boolean;
    showDrawer: boolean;
  } => {
    return {
      routePaths: [defaultTab.name],
      tabs: [],
      menufold: false,
      showDrawer: false
    };
  },
  getters: {
    currentPath(): string {
      return this.routePaths[this.routePaths.length - 1];
    }
  },
  actions: {
    setValue(type: string, value: any) {
      this[type] = value;
    },
    setSelectTab(tab: TabOption | string) {
      const tabs = this.tabs as TabOption[];
      const tabOption: TabOption =
        typeof tab === "object"
          ? tab
          : {
              name: tab,
              icon: "ant-design:home-outlined",
              text: `页面(${tabs.length})`
            };
      const name = tabOption.name;
      const index = tabs.findIndex((t: TabOption) => t.name == name);
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
        this.selectedTabName = defaultTab.name;
        return;
      }
      if (name === selectedName && index == 0) {
        this.selectedTabName = defaultTab.name;
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
          this.selectedTabName = defaultTab.name;
          break;
      }
    }
  }
});

export function pageStateStoreHook() {
  return pageStateStore(store);
}
