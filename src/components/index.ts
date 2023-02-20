/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-13 09:20:04
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-21 14:48:47
 * @FilePath: \onework-tools-ui\src\components\index.ts
 * @Description:
 */
import { App } from 'vue';
import IconifyIcon from './IconifyIcon/index';

import ResizeChart from './ResizeChart/index';

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

  /**
   *  卡片
   */
  app.component('CardTitle', CardTitle);

  /**
   *  表单
   */
};

export { setupComponents };
