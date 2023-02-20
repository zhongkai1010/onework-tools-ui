import { PageResult } from '/@/api/common';
import { http } from '/@/utils/http/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/manage/portal/video/getList' }),
  add: () => http.get<PageResult<any>>({ url: '/manage/portal/video/add' }),
  update: () => http.get<PageResult<any>>({ url: '/manage/portal/video/update' }),
  remove: () => http.get<PageResult<any>>({ url: '/manage/portal/video/remove' })
};
