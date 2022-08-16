import { http } from '/@/plugins/axios';

import {
  GetConfigResult,
  GetUserInfoResult,
  LoginPwdRequestParam,
  LoginPwdResult,
  RegisterRequestParam,
  RegisterResult,
} from './model/common';

export default {
  /**
   * 获取平台基础信息
   * @returns
   */
  getConfig: () => http.get<GetConfigResult>({ url: '/api/getConfig' }),
  /**
   *  登录
   * @param params
   * @returns
   */
  login: (params: LoginPwdRequestParam) =>
    http.post<LoginPwdResult>({
      url: '/api/login/pwd',
      data: params,
    }),
  /**
   *  注册
   * @param params
   * @returns
   */
  register: (params: RegisterRequestParam) =>
    http.post<RegisterResult>({
      url: '/api/register',
      data: params,
    }),
  /**
   * 退出
   * @returns
   */
  logout: () => http.post<RegisterResult>({ url: '/api/user/logout' }),
  /**
   * 获取用户详情
   */
  getUserInfo: () => http.get<GetUserInfoResult>({ url: '/api/user/getUserInfo' }),
};
