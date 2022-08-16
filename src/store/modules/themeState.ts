import { defineStore } from 'pinia';
import { store } from '../index';

import { ColorThemeEnum, THEME_COLOR } from '/@/settings/theme';

export interface ThemeStateType {
  theme: ColorThemeEnum;
}

const themeState = defineStore('theme-state', {
  state(): ThemeStateType {
    return {
      theme: ColorThemeEnum.BLUE_BLACK,
    };
  },
  getters: {
    themeVariables(): Recordable<string> {
      return THEME_COLOR[this.theme];
    },
  },
  actions: {
    setTheme(theme: ColorThemeEnum) {
      this.theme = theme;
    },
  },
  persist: true,
});
export function themeStateStoreHook() {
  return themeState(store);
}
