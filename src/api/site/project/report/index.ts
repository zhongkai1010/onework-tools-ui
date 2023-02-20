import { PageResult } from '/@/api/common';
import { http } from '/@/utils/http/axios';

export default {
  getProjectList: () => http.get<PageResult<any>>({ url: '/site/project/report/getList' }),

  getProjectReport: () =>
    http.get<PageResult<any>>({ url: '/site/project/report/getProjectReport' }),

  getPracticeCRCReportList: () =>
    http.get<PageResult<any>>({ url: '/site/project/report/getPracticeCRCReportList' }),

  getPracticeCRCReport: () =>
    http.get<PageResult<any>>({ url: '/site/project/report/getPracticeCRCReport' }),

  exportProjectReport: () =>
    http.get<PageResult<any>>({ url: '/site/project/report/exportProjectReport' }),

  exportPracticeCRCReport: () =>
    http.get<PageResult<any>>({ url: '/site/project/report/exportPracticeCRCReport' })
};
