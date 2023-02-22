import { GetListSearchParams, ReviewApplyParams, SiteApplyJoinCRCRecord } from './types';
import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';

import { http } from '/@/utils/http/axios';

export default {
  /**
   * 获取机构查看CRC申请加入机构审核记录
   * @param params
   * @returns
   */
  getList: (params: Partial<GetListSearchParams>) =>
    http.get<RequestResult<ResponsePageData<SiteApplyJoinCRCRecord>>>({
      url: '/site/crc/entry/getList',
      params
    }),

  /**
   * 获取机构审核CRC加入机构时候，提醒存在跨院信息和跨院有多少项目信息
   * @param params
   * @returns
   */
  getCRCWarning: (uid: string) =>
    http.get<RequestResult<ResponseData<SiteApplyJoinCRCRecord>>>({
      url: '/site/crc/entry/getCRCWarning',
      params: { uid }
    }),

  /**
   * 审核CRC申请加入机构记录
   * @param data
   * @returns
   */
  reviewApply: (data: ReviewApplyParams) =>
    http.post<RequestResult<any>>({ url: '/site/crc/entry/reviewApply', data })
};
