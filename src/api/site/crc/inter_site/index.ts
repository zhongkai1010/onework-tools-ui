import { GetListSearchParams, SiteInterSiteCRC, SiteInterSiteDetails } from './types';
import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  /**
   * 获取跨院列表
   * @returns
   */
  getList: (params: GetListSearchParams) =>
    defHttp.get<RequestResult<ResponsePageData<SiteInterSiteCRC>>>({
      url: '/site/crc/inter_site/getList',
      params
    }),

  /**
   * 获取CRC跨院数据详情
   * @returns
   */
  getDetails: (uid: string) =>
    defHttp.get<RequestResult<ResponseData<SiteInterSiteDetails>>>({
      url: '/site/crc/inter_site/getDetails',
      params: { uid }
    })
};
