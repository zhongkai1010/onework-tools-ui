import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/site/message/notice/getList' }),
  add: () => http.get<PageResult<any>>({ url: '/site/message/notice/add' }),
  update: () => http.get<PageResult<any>>({ url: '/site/message/notice/update' }),
  remove: () => http.get<PageResult<any>>({ url: '/site/message/notice/remove' })
};
