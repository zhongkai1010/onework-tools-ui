//  mockProdServer.ts
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

// 逐一导入您的mock.js文件
// 如果使用vite.mock.config.js，只需直接导入文件
// 可以使用 import.meta.glob功能来进行全部导入
import common from '../mock/common';

import region from '../mock/region';
import pageSystem from '../mock/page/system';
import pageToolsForm from '../mock/page/tools/form';
import pageToolsmodel from '../mock/page/tools/model';
import test from '../mock/test';

export function setupProdMockServer() {
  createProdMockServer([
    ...common,
    ...region,
    ...pageSystem,
    ...pageToolsForm,
    ...pageToolsmodel,
    ...test
  ]);
}
