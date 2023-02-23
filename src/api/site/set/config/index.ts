import { SiteConfig } from './types';
import { RequestResult, ResponseData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  /**
   *  获取所有机构配置
   * @param params
   * @returns
   */
  getAllSiteConfig: () =>
    http.get<RequestResult<ResponseData<SiteConfig[]>>>({
      url: '/site/set/config/getSiteConfig'
    }),

  /**
   *  获取单个机构配置
   * @param params
   * @returns
   */
  getSiteConfig: (type: string) =>
    http.get<RequestResult<ResponseData<SiteConfig>>>({
      url: '/site/set/config/getSiteConfig',
      params: { type }
    }),

  /**
   *
   * @param data
   * @returns
   */
  setSiteConfig: (data: SiteConfig) =>
    http.post<RequestResult<ResponseData<any>>>({ url: '/site/set/config/setSiteConfig', data })
};
