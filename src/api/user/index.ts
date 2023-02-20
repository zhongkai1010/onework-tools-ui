import { PageResult } from '/@/api/common';
import { http } from '../../utils/http/axios';

export interface CurrentUser {
  displayName: string;
  avatar: string;
}

export default {
  resetPassword: () => http.get<PageResult<any>>({ url: '/user/resetPassword' }),
  changePhone: () => http.get<PageResult<any>>({ url: '/user/changePhone' }),
  getMessages: () => http.get<PageResult<any>>({ url: '/user/getMessages' }),
  getUserInfo: () => http.get<CurrentUser>({ url: '/user/getUserInfo' })
};
