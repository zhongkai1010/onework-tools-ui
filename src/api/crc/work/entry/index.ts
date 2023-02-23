import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  getList: () => http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/entry/getList' }),

  getAuditJoinSiteList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/entry/getAuditJoinSiteList' }),

  joinSite: () => http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/entry/joinSite' })
};
