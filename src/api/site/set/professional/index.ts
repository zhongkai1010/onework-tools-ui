import { PageResult } from '/@/api/common';
import { http } from '/@/utils/http/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/site/set/professional/getList' }),
  add: () => http.get<PageResult<any>>({ url: '/site/set/professional/add' }),
  remove: () => http.get<PageResult<any>>({ url: '/site/set/professional/remove' })
};
