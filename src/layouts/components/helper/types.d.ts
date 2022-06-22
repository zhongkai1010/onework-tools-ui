interface MenuItem {
  key: string;
  title: string;
  menus?: MenuItem[];
}


interface Tab {
  name: string;
  component: any;
}
