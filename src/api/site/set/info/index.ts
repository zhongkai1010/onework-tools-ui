import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getInfo: () => http.get<PageResult<any>>({ url: '/site/set/info/getInfo' }),
  updateInfo: () => http.get<PageResult<any>>({ url: '/site/set/info/updateInfo' })
};
