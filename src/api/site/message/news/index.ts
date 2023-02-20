import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/site/message/news/getList' }),
  add: () => http.get<PageResult<any>>({ url: '/site/message/news/add' }),
  update: () => http.get<PageResult<any>>({ url: '/site/message/news/update' }),
  remove: () => http.get<PageResult<any>>({ url: '/site/message/news/remove' })
};
