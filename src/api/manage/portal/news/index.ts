import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/manage/portal/news/getList' }),
  add: () => http.get<PageResult<any>>({ url: '/manage/portal/news/add' }),
  update: () => http.get<PageResult<any>>({ url: '/manage/portal/news/update' }),
  remove: () => http.get<PageResult<any>>({ url: '/manage/portal/news/remove' })
};
