import { App } from 'vue';
import IconifyIcon from './IconifyIcon/index';
import ConfigTable, { DataTable } from './ConfigTable/index';

import ResizeChart from './ResizeChart/index';
import ConfigForm from './ConfigForm/index';

import FormItem from './FormItem/index';
import SubMenu from './Menu/index';

import PageView, { ErrorView, FrameView, BlankView, CardView } from './PageView/index';

const setupComponents = (app: App<Element>) => {
  app.component('SubMenu', SubMenu);
  app.component('ErrorView', ErrorView);
  app.component('BlankView', BlankView);
  app.component('CardView', CardView);
  /**
   *  辅助
   */
  app.component('IconifyIcon', IconifyIcon);
  app.component('FrameView', FrameView);
  /**
   *  图形与图标
   */
  app.component('ResizeChart', ResizeChart);
  /**
   *  页面布局
   */
  app.component('PageView', PageView);
  /**
   *  表格
   */
  app.component('ConfigTable', ConfigTable);
  app.component('DataTable', DataTable);
  /**
   *  表单
   */
  app.component('ConfigForm', ConfigForm);
  app.component('FormItem', FormItem);
};

export { setupComponents };
