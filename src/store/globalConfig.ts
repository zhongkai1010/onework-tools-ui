import { defineStore } from "pinia";
import { store } from "./index";

const globalConfigStore = defineStore("global-configs", {
  state(): {
    layout: "column" | "complex" | "portrait" | "horizontal" | "standard" | "float";
    showTabs: boolean;
  } {
    return {
      layout: "column",
      showTabs: true
    };
  },
  actions: {
    setLayout(value: string) {
      this.state.layout = value;
    }
  }
});

export function siteConfigStoreHook() {
  return globalConfigStore(store);
}
