interface Menu {
  index: string;
  title: string;
  order: number;
  icon: string;
  path: string;
  children?: Menu[];
}
