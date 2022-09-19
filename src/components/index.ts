/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-13 09:20:04
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-19 15:22:13
 * @FilePath: \onework-tools-ui\src\components\index.ts
 * @Description:
 */
import { App } from 'vue';
import IconifyIcon from './IconifyIcon/index';
import DynamicTable, { DataTable } from './DynamicTable/index';
import ResizeChart from './ResizeChart/index';
import DynamicForm, {
  FormItem,
  TypeFormItem,
  ModelFormItem,
  JsonFormItem
} from './DynamicForm/index';

import {
  FormModelProperty,
  FormModel,
  FormPropertyType,
  FormSelectAsync,
  FormSelectDictionary
} from './Form';

import PageView, { ErrorView, FrameView, BlankView, CardView } from './PageView/index';

import { CardTitle } from './Card';

const setupComponents = (app: App<Element>) => {
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
   *  卡片
   */
  app.component('CardTitle', CardTitle);

  /**
   *  表单
   */
  app.component('DynamicForm', DynamicForm);
  app.component('FormItem', FormItem);
  app.component('BlTypeFormItem', TypeFormItem);
  app.component('BlModelFormItem', ModelFormItem);
  app.component('ModelFormItem', ModelFormItem);
  app.component('BlJsonFormItem', JsonFormItem);

  app.component('FormModelProperty', FormModelProperty);
  app.component('FormModel', FormModel);
  app.component('FormPropertyType', FormPropertyType);
  app.component('FormSelectAsync', FormSelectAsync);
  app.component('FormSelectDictionary', FormSelectDictionary);
};

export { setupComponents };
