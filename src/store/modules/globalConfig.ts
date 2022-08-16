import { defineStore } from 'pinia';
import { store } from '../index';

export interface GlobalConfigType {
  layout: 'column' | 'complex' | 'portrait' | 'horizontal' | 'standard' | 'float';
  showTabs: boolean;
  menuWidth: number;
  lock: boolean;
  showLock: boolean;
  showSearch: boolean;
  showNotice: boolean;
  showFull: boolean;
  showLang: boolean;
  showProgress: boolean;
  version?: string;
  title?: string;
  sid?: string;
  logo?: string;
}

const globalConfigStore = defineStore('global-configs', {
  state(): GlobalConfigType {
    return {
      layout: 'standard',
      showTabs: true,
      menuWidth: 266,
      lock: false,
      showLock: true,
      showSearch: true,
      showNotice: true,
      showFull: true,
      showLang: true,
      showProgress: true,
      version: undefined,
      title: undefined,
      sid: undefined,
      logo: undefined,
    };
  },
  actions: {
    setTitle(title: string) {
      this.title = title;
    },
  },
  persist: true,
});

export function siteConfigStoreHook() {
  return globalConfigStore(store);
}
