import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  getProjectReportList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/report/getProjectReportList' }),
  submitProjectReport: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/report/getProjectReportList' }),
  againSubmitProjectReport: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/report/againSubmitReport' }),

  getSiteReportList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/report/getSiteReportList' }),
  submitSiteReport: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/report/submitSiteReport' }),
  againSubmitSiteReport: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/report/submitSiteReport' })
};
