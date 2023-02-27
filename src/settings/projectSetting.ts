import type { ProjectConfig } from '/#/config';
import { CacheTypeEnum } from '/@/enums/cacheEnum';
import {
  ContentEnum,
  PermissionModeEnum,
  RouterTransitionEnum,
  SessionTimeoutProcessingEnum
} from '/@/enums/appEnum';

// ! You need to clear the browser cache after the change
// ！ 更改后需要清空浏览器缓存
const setting: ProjectConfig = {
  // Permission mode
  //权限模式
  permissionMode: PermissionModeEnum.ROUTE_MAPPING,

  // Permission-related cache is stored in sessionStorage or localStorage
  // 权限相关的缓存存放在sessionStorage或者localStorage中
  permissionCacheType: CacheTypeEnum.LOCAL,

  // Session timeout processing
  // 会话超时处理
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,

  // Website gray mode, open for possible mourning dates
  // 网站灰色模式，对可能的哀悼日期开放
  grayMode: false,

  // Whether to cancel the menu, the top, the multi-tab page display, for possible embedded in other systems
  // 是否取消菜单、置顶、多标签页显示，以备嵌入其他系统
  fullContent: false,

  // content mode
  // 内容模式
  contentMode: ContentEnum.FULL,

  // Whether to display the logo
  // 是否显示logo
  showLogo: true,

  // Whether to show footer
  // 是否显示页脚
  showFooter: false,
  // menuSetting
  menuSetting: {
    collapsed: false
  },
  // Multi-label
  // 多标签
  multiTabsSetting: {
    cache: true,
    // Turn on
    // 打开
    show: true,
    // Is it possible to drag and drop sorting tabs
    // 是否可以拖放排序选项卡
    canDrag: true,
    // Turn on quick actions
    // 开启快捷操作
    showQuick: true,
    // Whether to show the refresh button
    // 是否显示刷新按钮
    showRedo: true,
    // Whether to show the collapse button
    // 是否显示折叠按钮
    showFold: true
  },

  // Transition Setting
  // 过渡设置
  transitionSetting: {
    //  Whether to open the page switching animation
    // 是否开启页面切换动画
    // The disabled state will also disable pageLoading
    // 禁用状态也会禁用页面加载
    enable: true,

    // 路由基本切换动画
    basicTransition: RouterTransitionEnum.FADE_SIDE,

    // Whether to open page switching loading
    // 是否开启页面切换加载
    // Only open when enable=true
    // 仅当enable=true时开启
    openPageLoading: true,

    // Whether to open the top progress bar
    // 是否开启顶部进度条
    openNProgress: true
  },

  // Whether to enable KeepAlive cache is best to close during development, otherwise the cache needs to be cleared every time
  // 是否开启KeepAlive缓存开发时最好关闭，否则每次都需要清空缓存
  openKeepAlive: true,

  // Automatic screen lock time, 0 does not lock the screen. Unit minute default 0
  // 自动锁屏时间，0不锁屏。 单位分钟默认0
  lockTime: 0,

  // Whether to show breadcrumbs
  // 是否显示面包屑
  showBreadCrumb: true,

  // Whether to show the breadcrumb icon
  // 是否显示面包屑图标
  showBreadCrumbIcon: false,

  // Use error-handler-plugin
  // 使用错误处理器插件
  useErrorHandle: false,

  // Whether to open back to top
  // 是否打开返回顶部
  useOpenBackTop: true,

  //  Is it possible to embed iframe pages
  // 是否可以嵌入 iframe 页面
  canEmbedIFramePage: true,

  // Whether to delete unclosed messages and notify when switching the interface
  // 是否删除未关闭的消息并在切换界面时通知
  closeMessageOnSwitch: true,

  // Whether to cancel the http request that has been sent but not responded when switching the interface.
  // If it is enabled, I want to overwrite a single interface. Can be set in a separate interface
  // 切换界面时是否取消已经发送但未响应的http请求。
  // 如果启用，我想覆盖单个接口。 可以在单独的界面中设置
  removeAllHttpPending: false
};

export default setting;
