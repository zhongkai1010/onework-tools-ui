import { defineStore } from 'pinia';
import { store } from '../index';

import { permissionStateStoreHook } from '/@/store/modules/permissionState';
import { pageStateStoreHook } from '/@/store/modules/pageState';
import { MenuRecordRaw } from '/#/layouts';
import { HOME_PAGE } from '/@/router/constant';

export interface TabStateType {
  tabs: MenuRecordRaw[];
  rightTool: {
    x: number;
    y: number;
    show: boolean;
    name?: string;
  };
}

export const defaultTabStateStore: TabStateType = {
  tabs: [],
  rightTool: {
    x: 0,
    y: 0,
    show: false,
  },
};

const tabStateStore = defineStore('tabs-state', {
  state(): TabStateType {
    return defaultTabStateStore;
  },
  actions: {
    addTab(path: string) {
      const permissionState = permissionStateStoreHook();
      const nav = permissionState.menuMap[path] as MenuRecordRaw;
      if (!nav) return;
      const index = this.tabs.findIndex((value) => value.path === nav.path);
      if (index < 0) {
        this.tabs.push(nav);
      }
    },
    operateTab(type: 'other' | 'left' | 'right' | 'all', path: string) {
      console.log('----------------operateTab----------------');
      const permissionState = permissionStateStoreHook();
      const pageState = pageStateStoreHook();
      const nav = permissionState.menuMap[path] as MenuRecordRaw;
      if (!nav) return;
      const index = this.tabs.findIndex((value) => value.path === nav.path);
      if (index < 0) return;
      let selectPath = path;
      switch (type) {
        case 'other':
          this.tabs = [this.tabs[index]];
          break;
        case 'left':
          this.tabs.splice(0, index);
          break;
        case 'right':
          this.tabs.splice(index + 1);
          break;
        case 'all':
          this.tabs = [];
          selectPath = HOME_PAGE.path;
          break;
      }
      pageState.setSelectTab(selectPath);
    },
    closeTab(path: string) {
      console.log('----------------closeTab----------------');
      // 默认标签不能进行关闭
      if (path === HOME_PAGE.path) {
        throw new Error(`${HOME_PAGE.path} is cannot close`);
      }
      // 没有标签记录，无法操作
      const index = this.tabs.findIndex((value) => value.path == path);
      if (index < 0) {
        throw new Error('close tab is error,not find tab record');
      }
      // 是否有存在没有权限情况
      const permissionState = permissionStateStoreHook();
      const pageState = pageStateStoreHook();
      const nav = permissionState.menuMap[path] as MenuRecordRaw;
      if (!nav) {
        throw new Error(`not find tab record ${path} permission denied`);
      }
      // 关闭标签，移除缓存
      if (nav.cache) {
        pageState.$patch((state) => {
          const index = state.cacheNames.findIndex((t) => t === nav.name);
          if (index >= 0) {
            state.cacheNames.splice(index, 1);
          }
        });
      }
      let toPath = path;
      const tabsLen = this.tabs.length;
      const maxIndex = tabsLen - 1;
      const afterIndex = index + 1;
      const foreIndex = index - 1;
      if (tabsLen == 1) {
        this.tabs = [];
        toPath = HOME_PAGE.path;
      } else {
        // 关闭标签后，计算选中tab的状态
        if (afterIndex <= maxIndex) {
          toPath = this.tabs[afterIndex].path;
        } else {
          toPath = this.tabs[foreIndex].path;
        }
        this.tabs.splice(index, 1);
      }
      pageState.setSelectTab(toPath);
    },
    reloadAll() {
      const { menuMap } = permissionStateStoreHook();
      const newTabs = (this.tabs as MenuRecordRaw[]).map((o) => {
        return menuMap[o.path];
      });

      this.tabs = newTabs;
    },
    clearAll() {
      this.tabs = [];
    },
  },
  persist: true,
});

export function tabStateStoreHook() {
  return tabStateStore(store);
}
