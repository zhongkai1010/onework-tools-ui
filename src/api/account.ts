import { http } from '../utils/http/axios';

export interface LoginParams {
  username: string;
  password: string;
  vcode: string;
}

export interface LoginResult {
  token: string;
}

export default {
  /**
   *  登录
   * @param params
   * @returns
   */
  login: (params: LoginParams) =>
    http.post<LoginResult>({
      url: '/login',
      data: params
    }),

  /**
   * 退出
   * @returns
   */
  logout: () => http.post<any>({ url: '/logout' })
};
