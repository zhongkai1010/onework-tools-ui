import { App } from 'vue';
import IconifyIcon from './IconifyIcon/index';
import DynamicTable from './DynamicTable/index';
import ResizeChart from './ResizeChart/index';
import DynamicForm, { AsynAutodcomplete, DynamicFormItem } from './DynamicForm/index';
import SubMenu from './Menu/index';

import PageView, { ErrorView, FrameView, BlankView, CardView } from './PageView/index';

const setupComponents = (app: App<Element>) => {
  app.component('IconifyIcon', IconifyIcon);
  app.component('SubMenu', SubMenu);
  app.component('DynamicTable', DynamicTable);
  app.component('FrameView', FrameView);
  app.component('ErrorView', ErrorView);
  app.component('BlankView', BlankView);
  app.component('ResizeChart', ResizeChart);
  app.component('CardView', CardView);
  app.component('PageView', PageView);
  app.component('DynamicForm', DynamicForm);
  app.component('DynamicFormItem', DynamicFormItem);
  app.component('AsynAutodcomplete', AsynAutodcomplete);
};

export { setupComponents };
