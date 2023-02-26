import { defineStore } from 'pinia';
import { store } from '../index';

import { Locale } from '/@/settings/locale';

export interface LocalStateType {
  locale: Locale;
}

const localeState = defineStore({
  id: 'app-locale',
  state(): LocalStateType {
    return {
      locale: Locale.ZH_CN
    };
  },
  getters: {},
  actions: {
    setLocaleInfo(locale: Locale) {
      this.locale = locale;
    }
  }
});
export function localeStateStoreHook() {
  return localeState(store);
}
