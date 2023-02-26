import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

export enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/getUserInfo',
  GetPermCode = '/getPermCode',
  getLoginCode = '/getLoginCode',
  GeWeiXinQR = '/GeWeiXinQR',
  GeWeiXinQRState = '/GeWeiXinQRState',
  TestRetry = '/testRetry'
}

/**
 * 登录
 * @param params
 * @param mode
 * @returns
 */
export function loginApi(data: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      data
    },
    {
      errorMessageMode: mode
    }
  );
}

/**
 *  获取用户信息
 * @returns
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

/**
 *  获取权限代码
 * @returns
 */
export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

/**
 *  获取登录随机码
 * @returns
 */
export function getLoginCode() {
  return defHttp.get<string>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

/**
 *  获取微信公众号二维码
 * @returns
 */
export function GeWeiXinQR() {
  return defHttp.get<string>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

/**
 *  获取微信公众号二维码状态
 * @returns
 */
export function GeWeiXinQRState() {
  return defHttp.get<string>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

/**
 * 退出用户
 * @returns
 */
export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

/**
 * 测试服务器连接
 * @returns
 */
export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000
      }
    }
  );
}
