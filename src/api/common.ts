import { http } from '/@/plugins/axios';

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
      data: params
    }),
  /**
   *  注册
   * @param params
   * @returns
   */
  register: (params: RegisterRequestParam) =>
    http.post<RegisterResult>({
      url: '/api/register',
      data: params
    }),
  /**
   * 退出
   * @returns
   */
  logout: () => http.post<RegisterResult>({ url: '/api/user/logout' }),
  /**
   * 获取用户详情
   */
  getUserInfo: () => http.get<GetUserInfoResult>({ url: '/api/user/getUserInfo' })
};

export interface PageResult<T> {
  data: T[];
  total: number;
}

export interface PaginatedRequest extends Recordable<any> {
  page: number;
  limit: number;
  order?: string;
}

export interface GetConfigResult {
  title: string;
  version: string;
  sid: string;
}

export interface LoginPwdRequestParam {
  username: string;
  password: string;
  vcode: string;
}

export interface LoginPwdResult {
  token: string;
}

export interface GetUserInfoResult {
  defaultName: string;
  avatar: string;
  permission: string[];
  menus: any[];
}

export interface RegisterRequestParam {
  username: string;
  password: string;
}

export interface RegisterResult {
  code: string;
}
