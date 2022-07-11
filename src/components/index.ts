import { App } from "vue";
import IconifyIcon from "./OwIcon/index";
import PageContainer from "./OwPage/index";
import SubMenu from "./OwSubMenu/index";
import Placeholder from "./OwPlaceholder/index";

const setupComponents = (app: App<Element>) => {
  app.component("IconifyIcon", IconifyIcon);
  app.component("PageContainer", PageContainer);
  app.component("SubMenu", SubMenu);
  app.component("Placeholder", Placeholder);
};

export default setupComponents;
