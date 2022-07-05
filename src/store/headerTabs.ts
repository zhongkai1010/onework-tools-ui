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
const headerTabStore = defineStore({
  id: "ow-header-tabs",
  state: (): { selectedTabName: string; tabs: TabOption[] } => {
    return {
      selectedTabName: defaultTab.name,
      tabs: []
    };
  },
  getters: {
    selectTab: (state): TabOption => {
      const index = state.tabs.findIndex(t => t.name === state.selectedTabName);
      if (index < 0) {
        return defaultTab;
      }
      return state.tabs[index];
    }
  },
  actions: {
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
      }
      if (name === selectedName && index !== 0) {
        this.selectedTabName = this.tabs[index + 1].name;
      }
      this.tabs.splice(index, 1);
    },
    operateTab(type: "other" | "left" | "right" | "all", name: string) {
      const tabs = this.tabs as TabOption[];
      const index = tabs.findIndex(value => value.name === name);
      const tab = this.tabs[index];
      if (index === -1) {
        return;
      }
      switch (type) {
        case "other":
          this.tabs = [tab];
          break;
        case "left":
          tabs.splice((index - 1) * -1);
          break;
        case "right":
          tabs.splice(index - 1);
          break;
        case "all":
          this.tabs = [];
          break;
      }
      this.selectedTabName = tab.name;
    }
  }
});

export function headerTabStoreHook() {
  return headerTabStore(store);
}
