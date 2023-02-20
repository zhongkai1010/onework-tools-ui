import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  resetPassword: () => http.get<PageResult<any>>({ url: '/user/config/resetPassword' }),
  changePhone: () => http.get<PageResult<any>>({ url: '/user/config/changePhone' })
};
