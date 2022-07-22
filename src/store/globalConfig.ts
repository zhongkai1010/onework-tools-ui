import { defineStore } from "pinia";
import { store } from "./index";

const globalConfigStore = defineStore("global-configs", {
  state(): {
    layout: "column" | "complex" | "portrait" | "horizontal" | "standard" | "float";
    showTabs: boolean;
    menuWidth: number;
    locale: "en" | "zh-CN";
  } {
    return {
      layout: "standard",
      showTabs: true,
      menuWidth: 266,
      locale: "zh-CN"
    };
  },

  actions: {
    setLayout(value: string) {
      this.layout = value;
    },
    setValue(type: string, value: any) {
      this[type] = value;
    }
  },
  persist: true
});

export function siteConfigStoreHook() {
  return globalConfigStore(store);
}
