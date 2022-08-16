import { App } from 'vue';
import IconifyIcon from './IconifyIcon/index';
import DynamicTable from './DynamicTable/index';
import EChart from './Echart/index';
import SubMenu from './Menu/index';

import { ErrorView, FrameView, BlankView, PageView, CardView } from './PageView/index';

const setupComponents = (app: App<Element>) => {
  app.component('IconifyIcon', IconifyIcon);
  app.component('SubMenu', SubMenu);
  app.component('DynamicTable', DynamicTable);
  app.component('FrameView', FrameView);
  app.component('ErrorView', ErrorView);
  app.component('BlankView', BlankView);
  app.component('EChart', EChart);
  app.component('CardView', CardView);
  app.component('PageView', PageView);
};

export { setupComponents };
