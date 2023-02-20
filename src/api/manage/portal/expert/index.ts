import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/manage/portal/expert/getList' }),
  add: () => http.get<PageResult<any>>({ url: '/manage/portal/expert/add' }),
  update: () => http.get<PageResult<any>>({ url: '/manage/portal/expert/update' }),
  remove: () => http.get<PageResult<any>>({ url: '/manage/portal/expert/remove' })
};
