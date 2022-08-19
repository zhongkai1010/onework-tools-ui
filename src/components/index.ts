import { App } from 'vue';
import IconifyIcon from './IconifyIcon/index';
import DynamicTable from './DynamicTable/index';
import ProTable from './ProTable/index';

import ResizeChart from './ResizeChart/index';
import DynamicForm, {
  AsynAutodcomplete,
  DynamicFormItem,
  AsynCascader,
  AsynCheckbox,
  AsynRadio,
  AsynSelect,
  AsynTreeSelect,
  AsynTable,
} from './DynamicForm/index';
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

  app.component('ProTable', ProTable);

  app.component('DynamicForm', DynamicForm);
  app.component('DynamicFormItem', DynamicFormItem);
  app.component('FormAsynTable', AsynTable);
  app.component('FormAutodcomplete', AsynAutodcomplete);
  app.component('FormCascader', AsynCascader);
  app.component('FormCheckbox', AsynCheckbox);
  app.component('FormRadio', AsynRadio);
  app.component('FormSelect', AsynSelect);
  app.component('FormTreeSelect', AsynTreeSelect);
};

export { setupComponents };
