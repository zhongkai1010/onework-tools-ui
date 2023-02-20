import { PageResult } from '/@/api/common';
import { http } from '/@/utils/http/axios';

export default {
  getAdmin: () => http.get<PageResult<any>>({ url: '/site/set/admin/getSiteAdmin' }),
  transferAdmin: () => http.get<PageResult<any>>({ url: '/site/set/admin/transferSiteAdmin' }),
  addDeputyAdmin: () => http.get<PageResult<any>>({ url: '/site/set/admin/addDeputyAdmin' }),
  cancelDeputyAdmin: () => http.get<PageResult<any>>({ url: '/site/set/admin/cancelDeputyAdmin' })
};
