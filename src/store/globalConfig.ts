import { defineStore } from "pinia";
import { store } from "./index";

const globalConfigStore = defineStore("global-configs", {
  state(): {
    layout: "column" | "complex" | "portrait" | "horizontal" | "standard" | "float";
    showTabs: boolean;
    menuWidth: number;
    drawerState: false;
    menuState: boolean;
  } {
    return {
      layout: "standard",
      showTabs: true,
      menuWidth: 266,
      drawerState: false,
      menuState: false
    };
  },
  actions: {
    setLayout(value: string) {
      this.layout = value;
    },
    showDrawer(value: boolean) {
      this.drawerState = value;
    },
    setValue(type: string, value: any) {
      this[type] = value;
    }
  }
});

export function siteConfigStoreHook() {
  return globalConfigStore(store);
}
