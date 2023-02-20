import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getReportFrequency: () =>
    http.get<PageResult<any>>({ url: '/site/set/template/getReportFrequency' }),
  setReportFrequency: () =>
    http.get<PageResult<any>>({ url: '/site/set/template/setReportFrequency' }),

  getReportTemplate: () =>
    http.get<PageResult<any>>({ url: '/site/project/appointment/getReportTemplate' }),

  setReportTemplate: () =>
    http.get<PageResult<any>>({ url: '/site/project/appointment/setReportTemplate' })
};
