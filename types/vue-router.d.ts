export {};

declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    // 排序
    orderNo?: number;
    // title
    title: string;
    // 图标
    icon?: string;
    // iframe地址
    frameSrc?: string;
    //外链地址
    link?: string;
    // 是否缓存状态
    keepAlive?: boolean;
    // 动画效果
    transition?: string;
    // 是否显示菜单
    hideMenu?: boolean;
  }
}

//  // dynamic router level.
//  dynamicLevel?: number;
//  // dynamic router real route path (For performance).
//  realPath?: string;
//  // Whether to ignore permissions
//  ignoreAuth?: boolean;
//  // role info
//  roles?: RoleEnum[];
//  // Whether not to cache
//  ignoreKeepAlive?: boolean;
//  // Is it fixed on tab
//  affix?: boolean;

//  transitionName?: string;
//  // Whether the route has been dynamically added
//  hideBreadcrumb?: boolean;
//  // Hide submenu
//  hideChildrenInMenu?: boolean;
//  // Carrying parameters
//  carryParam?: boolean;
//  // Used internally to mark single-level menus
//  single?: boolean;
//  // Currently active menu
//  currentActiveMenu?: string;
//  // Never show in tab
//  hideTab?: boolean;
//  // Never show in menu
//  hideMenu?: boolean;
//  isLink?: boolean;
//      // only build for Menu
//      ignoreRoute?: boolean;
//      // Hide path for children
//      hidePathForChildren?: boolean;
