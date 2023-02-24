import { RequestResult, ResponseData } from '/@/api/types';
import { http } from '..//@/utils/http/axios';

export interface CurrentUser {
  displayName: string;
  avatar: string;
}

export default {
  resetPassword: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/user/resetPassword' }),
  changePhone: () => defHttp.get<RequestResult<ResponseData<any>>>({ url: '/user/changePhone' }),
  getMessages: () => defHttp.get<RequestResult<ResponseData<any>>>({ url: '/user/getMessages' }),
  getUserInfo: () => defHttp.get<CurrentUser>({ url: '/user/getUserInfo' })
};
