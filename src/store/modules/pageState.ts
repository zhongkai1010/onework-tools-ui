import { defineStore } from 'pinia';

import { HOME_PAGE } from '/@/router/constant';
import { siteConfigStoreHook } from './globalConfig';
import { store } from '../index';

import { tabStateStoreHook } from '/@/store/modules/tabState';
import { permissionStateStoreHook } from '/@/store/modules/permissionState';
import { router } from '/@/router';

import { DynamicCssVariablesType, MenuRecordRaw } from '/@/layouts/types';

export interface PageStateType {
  selectNav?: string;
  selectTab: string;
  selectMenu?: string;

  menufold: boolean;
  showDrawer: boolean;
  cacheNames: string[];
  /**
   *  内容加载状态
   */
  reloading: boolean;
  /**
   *  路由加载状态
   */
  routerLoading: boolean;
}

export type LoadingType = 'router' | 'page';

export const defaultPageState: PageStateType = {
  selectNav: undefined,
  selectTab: HOME_PAGE.path,
  selectMenu: undefined,
  menufold: false,
  showDrawer: false,
  cacheNames: [],
  routerLoading: false,
  reloading: false,
};

const pageStateStore = defineStore('page-state', {
  state: (): PageStateType => {
    return { ...defaultPageState };
  },
  getters: {
    dynamicCssVariables(): DynamicCssVariablesType {
      const siteConfigStore = siteConfigStoreHook();
      const layout = siteConfigStore.layout;
      // 根据配置计算layout左侧布局宽度
      let sidebarMenuWidth = siteConfigStore.menuWidth;
      if (this.menufold) {
        sidebarMenuWidth = layout === 'column' ? 0 : 64;
      }
      // 根据配置计算layout标签高度
      const hearderTabHeight = siteConfigStore.showTabs ? 50 : 0;
      return {
        '--layout-sidebar-nav-width': layout === 'column' ? '64px' : '0px',
        '--layout-sidebar-menu-width': `${sidebarMenuWidth}px`,
        '--layout-header-tab-height': `${hearderTabHeight}px`,
      };
    },
  },
  actions: {
    /**
     * 设置页面加载状态
     * @param type
     * @param value
     */
    setLoading(type: LoadingType, value: boolean) {
      switch (type) {
        case 'router':
          this.routerLoading = value;
          break;
        case 'page':
          this.reloading = value;
          break;
      }
    },
    /**
     * 刷新页面
     * @param time 时长（毫秒）
     */
    refresh(time = 500) {
      this.reloading = true;
      setTimeout(() => {
        this.reloading = false;
      }, time);
    },
    setSelectNav(path: string) {
      // 左侧nav区域选中
      const permissionState = permissionStateStoreHook();
      const nav: MenuRecordRaw = permissionState.menuMap[path];
      if (!nav) return;
      this.selectNav = path;
    },
    setSelectMenu(path: string) {
      const { menuMap } = permissionStateStoreHook();
      const { showTabs } = siteConfigStoreHook();
      const nav: MenuRecordRaw = menuMap[path];
      if (!nav) return;

      // 计算缓存
      if (nav.cache && !this.cacheNames.includes(nav.name)) {
        this.cacheNames.push(nav.name);
      }

      this.selectMenu = path;
      // 左侧nav区域选中
      const rootNav = menuMap[nav.paths[0]];
      this.selectNav = rootNav.path;
      //tabs区域选中
      const tabState = tabStateStoreHook();
      tabState.addTab(path);
      this.selectTab = nav.path;
      // 防止选中标签与菜单同时执行router.push
      if (!showTabs) {
        router.push(path);
      }
    },
    setSelectTab(path: string) {
      if (path === HOME_PAGE.path) {
        this.selectTab = path;
      } else {
        const { menuMap } = permissionStateStoreHook();
        const nav: MenuRecordRaw = menuMap[path];
        if (!nav) return;
        const rootNav = menuMap[nav.paths[0]];
        this.selectNav = rootNav.path;
        this.selectMenu = path;
        this.selectTab = path;
      }
      router.push(this.selectTab);
    },
    clearAll() {
      Object.keys(defaultPageState).forEach((t) => {
        this[t] = defaultPageState[t];
      });
    },
  },
  persist: true,
});

export function pageStateStoreHook() {
  return pageStateStore(store);
}
