import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/site/crc/job/getList' }),

  getDetails: () => http.get<PageResult<any>>({ url: '/site/crc/job/getDetails' }),

  getSiteData: (data: any) =>
    http.post<PageResult<Boolean>>({ url: '/site/crc/job/getSiteData', data }),

  transferProject: (data: any) =>
    http.post<PageResult<Boolean>>({ url: '/site/crc/job/transferProject', data })
};
