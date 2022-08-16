import { defineStore } from 'pinia';
import { store } from '../index';

import { Locale } from '/@/settings/locale';

export interface LocalStateType {
  locale: Locale;
}

const localeState = defineStore('locale-state', {
  state(): LocalStateType {
    return {
      locale: Locale.ZH_CN,
    };
  },
  getters: {},
  actions: {
    setLocaleInfo(locale: Locale) {
      this.locale = locale;
    },
  },
  persist: true,
});
export function localeStateStoreHook() {
  return localeState(store);
}
