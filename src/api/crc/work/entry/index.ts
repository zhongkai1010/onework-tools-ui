import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  getList: () => defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/entry/getList' }),

  getAuditJoinSiteList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/entry/getAuditJoinSiteList' }),

  joinSite: () => defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/entry/joinSite' })
};
