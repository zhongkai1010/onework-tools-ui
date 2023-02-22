import { PageResult } from '/@/api/common';
import { http } from '/@/utils/http/axios';

export default {
  getSiteConfig: () => http.get<PageResult<any>>({ url: '/site/set/config/getSiteConfig' }),

  setSiteConfig: () => http.get<PageResult<any>>({ url: '/site/set/config/setSiteConfig' })
};