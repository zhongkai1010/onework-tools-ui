import { defHttp } from '/@/utils/http/axios';

export interface PaginatedRequest extends Recordable<any> {
  page: number;
  limit: number;
  order?: string;
}

export interface GetConfigResult {
  title: string;
  version: string;
  sid: string;
}

export interface DictionaryOption {
  text: string;
  value: string;
}

export default {
  /**
   * 获取平台基础信息
   * @returns
   */
  getConfig: () => defHttp.get<GetConfigResult>({ url: '/getConfig' }),

  /**
   * 获取选项
   */
  getOptions: (name: string) =>
    defHttp.get<DictionaryOption[]>({ url: '/getOptions', params: { name } })
};
