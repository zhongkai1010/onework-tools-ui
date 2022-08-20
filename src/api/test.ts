import { http } from '/@/plugins/axios';

interface TestTableData {
  uid: string;
  fieldName: string;
  componentType: string;
  title: string;
  placeholderTips: string;
  formGrid: string;
  labelWidth: string;
  componentWidth: string;
  defaults: string;
  minimum: string;
  maximum: string;
}

export default {
  /**
   * 获取页面配置
   */
  getPageConfig: http.get<TestTableData>({ url: '/api/test/getPageConfig' }),
  /**
   * 获取表格数据
   * @returns
   */
  getAllData: () => http.get<TestTableData>({ url: '/api/test/getAllData' }),

  /**
   * 获取分页数据
   * @returns
   */
  getAllPageData: () => http.get<TestTableData>({ url: '/api/test/getAllPageData' }),
};
