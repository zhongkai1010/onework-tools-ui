import { SearchSiteProfessionalParams, SiteProfessional } from './types';
import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  /**
   *  获取机构科室
   * @returns
   */
  getList: (params: SearchSiteProfessionalParams) =>
    defHttp.get<RequestResult<ResponsePageData<SiteProfessional>>>({
      url: '/site/set/professional/getList',
      params
    }),

  /**
   * 新增机构专业科室
   * @returns
   */
  add: (data: SiteProfessional) =>
    defHttp.post<RequestResult<ResponseData<any>>>({ url: '/site/set/professional/add', data }),

  /**
   * 修改机构专业科室
   * @returns
   */
  update: (data: SiteProfessional) =>
    defHttp.post<RequestResult<ResponseData<any>>>({ url: '/site/set/professional/update', data }),

  /**
   * 删除机构专业科室
   * @param uid
   * @returns
   */
  remove: (uid: string) =>
    defHttp.post<RequestResult<ResponseData<any>>>({
      url: '/site/set/professional/remove',
      params: { uid }
    })
};
