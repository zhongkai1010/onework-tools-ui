import { AddSiteNotice, SiteNotice, UpdateSiteNotice } from './types';
import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  /**
   * 获取机构发布通知的列表
   * @returns
   */
  getList: () =>
    http.get<RequestResult<ResponsePageData<SiteNotice>>>({ url: '/site/message/notice/getList' }),

  /**
   * 添加机构通知
   * @param data
   * @returns
   */
  add: (data: AddSiteNotice) =>
    http.post<RequestResult<ResponseData<any>>>({ url: '/site/message/notice/add', data }),

  /**
   * 修改机构通知
   * @param data
   * @returns
   */
  update: (data: UpdateSiteNotice) =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/site/message/notice/update', data }),

  /**
   *  移除机构通知
   * @returns
   */
  remove: () => http.get<RequestResult<ResponseData<any>>>({ url: '/site/message/notice/remove' })
};
