export interface NavRecordRaw {
  order?: number;
  name: string; // 唯一值
  title: string; // 标题
  path: string; // 导航
  paths: string[]; // 上级路径集合
  parentPath?: string; // 上级name
  icon?: string; // 图标
  iframeSrc?: string; //  是否iframe连接
  islink?: boolean; // iframe的url或者外链url
  cache?: boolean; // 缓存
  children?: NavRecordRaw[]; //子集导航
  system?: boolean; //是否系统默认
  redirect?: string;
}

export interface TabOperateItem {
  text: string;
  icon: string;
  command: "other" | "left" | "right" | "all" | "refresh";
}
