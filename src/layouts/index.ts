export interface TabOperateItem {
  text: string;
  icon: string;
  command: 'other' | 'left' | 'right' | 'all' | 'refresh';
}

export interface MenuRecordRaw {
  order?: number; // 排序，以升序排列
  name: string; // 唯一值
  title: string; // 标题
  path: string; // 路径
  paths: string[]; // 路径集合
  parentPath?: string; // 上级路径
  icon?: string; // 图标
  frameSrc?: string; //  是否iframe连接
  link?: string; // 外链url
  cache?: boolean; // 缓存
  children?: MenuRecordRaw[]; //子集导航
  hideMenu?: boolean;
  redirect?: string;
}
