import { AddSiteNotice, SiteNotice, UpdateSiteNotice } from './types';
import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  /**
   * 获取机构发布通知的列表
   * @returns
   */
  getList: () =>
    defHttp.get<RequestResult<ResponsePageData<SiteNotice>>>({
      url: '/site/message/notice/getList'
    }),

  /**
   * 添加机构通知
   * @param data
   * @returns
   */
  add: (data: AddSiteNotice) =>
    defHttp.post<RequestResult<ResponseData<any>>>({ url: '/site/message/notice/add', data }),

  /**
   * 修改机构通知
   * @param data
   * @returns
   */
  update: (data: UpdateSiteNotice) =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/site/message/notice/update', data }),

  /**
   *  移除机构通知
   * @returns
   */
  remove: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/site/message/notice/remove' })
};
