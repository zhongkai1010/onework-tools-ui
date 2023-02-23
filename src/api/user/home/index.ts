import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '../../../utils/http/axios';

export interface CustomMenu {
  uid: string;
  displayName: string;
  router: string;
  icon: string;
}

export interface TodoItem {
  uid: string;
  text: string;
  typeName: string;
  applyUserName: string;
  applyDateTime: string;
}

export interface NoticeItem {
  uid: string;
  text: string;
  typeName: string;
  promoterName: string;
  promoterDateTime: string;
}

export interface SiteStatistics {
  crcTotal: number;
  smoTotal: number;
  projectTotal: number;
}

export default {
  getCustomMenus: () =>
    http.get<RequestResult<ResponseData<CustomMenu>>>({ url: '/user/home/getCustomMenu' }),

  getMenus: () => http.getRequestResult<ResponseData<<CustomMenu>>>({ url: '/user/home/getMenus' }),

  getTodos: () => http.get<PageResult<TodoItem>>({ url: '/user/home/getTodos' }),

  getNotices: () => http.get<PageResult<NoticeItem>>({ url: '/user/home/getNotices' }),

  getSiteStatistics: () =>
    http.get<PageResult<SiteStatistics>>({ url: '/user/home/getSiteStatistics' })
};
