import { SiteInfo } from './types';
import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  /**
   *  获取机构基本信息
   * @returns
   */
  getInfo: () =>
    defHttp.get<RequestResult<ResponseData<SiteInfo>>>({ url: '/site/set/info/getInfo' }),

  /**
   *  修改机构基本信息
   * @returns
   */

  updateInfo: (data: SiteInfo) =>
    defHttp.post<RequestResult<ResponseData<any>>>({ url: '/site/set/info/updateInfo', data })
};
