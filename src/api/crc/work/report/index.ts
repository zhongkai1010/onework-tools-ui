import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getProjectReportList: () =>
    http.get<PageResult<any>>({ url: '/crc/work/report/getProjectReportList' }),
  submitProjectReport: () =>
    http.get<PageResult<any>>({ url: '/crc/work/report/getProjectReportList' }),
  againSubmitProjectReport: () =>
    http.get<PageResult<any>>({ url: '/crc/work/report/againSubmitReport' }),

  getSiteReportList: () => http.get<PageResult<any>>({ url: '/crc/work/report/getSiteReportList' }),
  submitSiteReport: () => http.get<PageResult<any>>({ url: '/crc/work/report/submitSiteReport' }),
  againSubmitSiteReport: () =>
    http.get<PageResult<any>>({ url: '/crc/work/report/submitSiteReport' })
};
