import { AddSiteNews, SearchSiteNewsParams, SiteNews } from './types';
import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  /**
   *  获取机构资讯的列表
   * @returns
   */
  getList: (params: SearchSiteNewsParams) =>
    defHttp.get<RequestResult<ResponseData<SiteNews>>>({
      url: '/site/message/news/getList',
      params
    }),

  /**
   *  添加机构资讯
   * @returns
   */
  add: (data: AddSiteNews) =>
    defHttp.post<RequestResult<ResponseData<any>>>({ url: '/site/message/news/add', data }),
  /**
   * 修改机构资讯
   * @returns
   */
  update: (data: SiteNews) =>
    defHttp.post<RequestResult<ResponseData<any>>>({ url: '/site/message/news/update', data }),
  /**
   * 删除机构资讯
   * @returns
   */
  remove: (uid: string) =>
    defHttp.get<RequestResult<ResponseData<any>>>({
      url: '/site/message/news/remove',
      params: { uid }
    })
};
