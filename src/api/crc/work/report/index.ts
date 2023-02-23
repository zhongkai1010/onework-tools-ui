import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  getProjectReportList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/report/getProjectReportList' }),
  submitProjectReport: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/report/getProjectReportList' }),
  againSubmitProjectReport: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/report/againSubmitReport' }),

  getSiteReportList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/report/getSiteReportList' }),
  submitSiteReport: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/report/submitSiteReport' }),
  againSubmitSiteReport: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/report/submitSiteReport' })
};
