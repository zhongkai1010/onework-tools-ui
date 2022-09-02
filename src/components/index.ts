import { App } from 'vue';
import IconifyIcon from './IconifyIcon/index';
import DynamicTable, { DataTable } from './DynamicTable/index';

import ResizeChart from './ResizeChart/index';

import DynamicForm, { FormItem } from './DynamicForm/index';

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
  app.component('DynamicTable', DynamicTable);
  app.component('DataTable', DataTable);
  /**
   *  表单
   */
  app.component('DynamicForm', DynamicForm);
  app.component('FormItem', FormItem);
};

export { setupComponents };
