import { defineStore } from "pinia";
import { store } from "./index";

const globalConfigStore = defineStore("global-configs", {
  state(): {
    layout: "column" | "complex" | "portrait" | "horizontal" | "standard" | "float";
    showTabs: boolean;
    menuWidth: number;
    drawerState: false;
  } {
    return {
      layout: "float",
      showTabs: true,
      menuWidth: 200,
      drawerState: false
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
