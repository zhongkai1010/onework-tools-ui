import { defineStore } from "pinia";
import { store } from "./index";

interface TabOption {
  name: string;
  icon?: string;
  selected?: boolean;
  text: string;
}

export const defaultTab: TabOption = {
  name: "/",
  icon: "ant-design:home-outlined",
  selected: true,
  text: "主页"
};

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
const headerTabStore = defineStore({
  id: "ow-header-tabs",
  state: (): { tabs: TabOption[] } => {
    return {
      tabs: []
    };
  },
  getters: {
    selectTab: (state): TabOption => {
      const index = state.tabs.findIndex(t => t.selected);
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
              selected: false,
              icon: "ant-design:home-outlined",
              text: `页面（${tabs.length}）`
            };
      const name = tabOption.name;
      const index = tabs.findIndex((t: TabOption) => t.name == tabOption.name);
      if (index < 0) {
        this.tabs.push(tabOption);
      }
      return tabs.map((t: TabOption) => {
        t.selected = t.name == name;
        return t;
      });
    },
    operateTab(type: "close" | "left" | "right" | "all", name: string) {
      const tabs = this.tabs as TabOption[];
      const index = this.tabs.findIndex(value => value.path === name);
      if (index === -1) {
        return;
      }
      switch (type) {
        case "close":
          this.tabs = tabs.slice(index - 1, 1);
          break;
        case "left":
          this.tabs = tabs.slice(index - 1, 1);
          break;
        case "right":
          break;
        case "all":
          this.tabs = [];
          break;
        default:
          break;
      }
    }
  }
});

export function headerTabStoreHook() {
  return headerTabStore(store);
}
