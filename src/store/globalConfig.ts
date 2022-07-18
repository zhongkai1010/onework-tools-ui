import { defineStore } from "pinia";
import { store } from "./index";

const globalConfigStore = defineStore("global-configs", {
  state(): {
    layout: "column" | "complex" | "portrait" | "horizontal" | "standard" | "float";
    showTabs: boolean;
    menuWidth: number;
  } {
    return {
      layout: "standard",
      showTabs: true,
      menuWidth: 266
    };
  },

  actions: {
    setLayout(value: string) {
      this.layout = value;
    },
    setValue(type: string, value: any) {
      this[type] = value;
    }
  }
});

export function siteConfigStoreHook() {
  return globalConfigStore(store);
}
