interface Menu {
  title: string;
  path: string;
  icon: string;
  children?: Menu[];
}

/**
 * label: 标题
 * name : 标签name，唯一
 * icon : 图标
 */
interface Tab {
  label: string;
  name: string;
  icon: string;
}
