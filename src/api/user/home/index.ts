import { RequestResult, ResponseData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

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

  getMenus: () => http.get<RequestResult<ResponseData<CustomMenu>>>({ url: '/user/home/getMenus' }),

  getTodos: () => http.get<RequestResult<ResponseData<TodoItem>>>({ url: '/user/home/getTodos' }),

  getNotices: () =>
    http.get<RequestResult<ResponseData<NoticeItem>>>({ url: '/user/home/getNotices' }),

  getSiteStatistics: () =>
    http.get<RequestResult<ResponseData<SiteStatistics>>>({ url: '/user/home/getSiteStatistics' })
};
