import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

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
    defHttp.get<RequestResult<ResponseData<CustomMenu>>>({ url: '/user/home/getCustomMenu' }),

  getMenus: () =>
    defHttp.get<RequestResult<ResponseData<CustomMenu>>>({ url: '/user/home/getMenus' }),

  getTodos: () =>
    defHttp.get<RequestResult<ResponseData<TodoItem>>>({ url: '/user/home/getTodos' }),

  getNotices: () =>
    defHttp.get<RequestResult<ResponseData<NoticeItem>>>({ url: '/user/home/getNotices' }),

  getSiteStatistics: () =>
    defHttp.get<RequestResult<ResponseData<SiteStatistics>>>({
      url: '/user/home/getSiteStatistics'
    })
};
