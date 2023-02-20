import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/crc/work/entry/getList' }),

  getAuditJoinSiteList: () =>
    http.get<PageResult<any>>({ url: '/crc/work/entry/getAuditJoinSiteList' }),

  joinSite: () => http.get<PageResult<any>>({ url: '/crc/work/entry/joinSite' })
};
