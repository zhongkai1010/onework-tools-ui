import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export interface SiteAdmin {
  userName: string;
}

export interface TransferSiteAdminData {
  userId: string;
}

export interface SiteSubAdmin {
  userName: string;
}

export interface SearchSiteSubAdminParams {
  userName: string;
}

export interface CancelSubAdminData {
  userName: string;
}

export interface AddSubAdminData {
  userName: string;
}

export default {
  /**
   * 获取机构管理员
   * @returns
   */
  getSiteAdmin: () =>
    defHttp.get<RequestResult<ResponseData<SiteAdmin>>>({ url: '/site/set/admin/getSiteAdmin' }),

  /**
   * 转让管理员
   * @returns
   */
  transferSiteAdmin: (data: TransferSiteAdminData) =>
    defHttp.post<RequestResult<ResponseData<any>>>({
      url: '/site/set/admin/transferSiteAdmin',
      data
    }),

  /**
   * 获取机构子管理员
   * @returns
   */
  getSiteSubAdmin: (params: SearchSiteSubAdminParams) =>
    defHttp.get<RequestResult<ResponseData<SiteAdmin>>>({
      url: '/site/set/admin/getSiteSubAdmin',
      params
    }),

  /**
   * 添加机构子管理员
   * @returns
   */
  addSubAdmin: (data: AddSubAdminData) =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/site/set/admin/addSubAdmin', data }),

  /**
   * 取消机构子管理员
   */
  cancelSubAdmin: (data: CancelSubAdminData) =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/site/set/admin/cancelSubAdmin', data })
};