import { SiteConfig } from './types';
import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  /**
   *  获取所有机构配置
   * @param params
   * @returns
   */
  getAllSiteConfig: () =>
    defHttp.get<RequestResult<ResponseData<SiteConfig[]>>>({
      url: '/site/set/config/getSiteConfig'
    }),

  /**
   *  获取单个机构配置
   * @param params
   * @returns
   */
  getSiteConfig: (type: string) =>
    defHttp.get<RequestResult<ResponseData<SiteConfig>>>({
      url: '/site/set/config/getSiteConfig',
      params: { type }
    }),

  /**
   *
   * @param data
   * @returns
   */
  setSiteConfig: (data: SiteConfig) =>
    defHttp.post<RequestResult<ResponseData<any>>>({ url: '/site/set/config/setSiteConfig', data })
};
