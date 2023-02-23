import { RequestResult, ResponseData } from '/@/api/types';
import { http } from '../../utils/http/axios';

export interface CurrentUser {
  displayName: string;
  avatar: string;
}

export default {
  resetPassword: () => http.get<RequestResult<ResponseData<any>>>({ url: '/user/resetPassword' }),
  changePhone: () => http.get<RequestResult<ResponseData<any>>>({ url: '/user/changePhone' }),
  getMessages: () => http.get<RequestResult<ResponseData<any>>>({ url: '/user/getMessages' }),
  getUserInfo: () => http.get<CurrentUser>({ url: '/user/getUserInfo' })
};
