import { defineStore } from 'pinia';
import { store } from '../index';
import { MenuRecordRaw } from '/@/layouts/types';

export interface PermissionStateType {
  menus: MenuRecordRaw[];
  menuMap: { [key: string]: MenuRecordRaw };
}

export const defaultPermissionState: PermissionStateType = {
  menus: [],
  menuMap: {}
};

const permissionState = defineStore('permission-state', {
  state(): PermissionStateType {
    return defaultPermissionState;
  },
  getters: {
    rootNavs(): MenuRecordRaw[] {
      const navs = this.menus as MenuRecordRaw[];
      return Object.values(navs)
        .filter((t) => !t.parentPath)
        .sort((a, b) => a.order - b.order);
    },
    iframeNavs(): MenuRecordRaw[] {
      const navs = Object.values(this.menuMap) as MenuRecordRaw[];
      return navs.filter((t) => t.frameSrc);
    },
    breadcrumbNavs(): MenuRecordRaw[] {
      const nav: MenuRecordRaw = this.menuMap[this.selectMenu];
      if (!nav) return [];
      return nav.paths.map((t) => this.menuMap[t]);
    }
  },
  actions: {
    clearAll() {
      this.menus = [];
      this.menuMap = {};
    }
  },
  persist: true
});
export function permissionStateStoreHook() {
  return permissionState(store);
}
