import { http } from '/@/utils/http/axios';
import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';

export interface GetListSearchParams {
  userName: string;
}

export interface SiteTeamPersonnel {
  userName: string;
}

export interface SiteProfessional {
  dempName: string;
}

export default {
  /**
   *  获取机构团队人员列表
   * @returns
   */
  getList: (params: GetListSearchParams) =>
    http.get<RequestResult<ResponsePageData<SiteTeamPersonnel>>>({
      url: '/site/team/join/getList',
      params
    }),

  getSiteProfessionalList: () =>
    http.get<RequestResult<ResponseData<SiteProfessional>>>({
      url: '/site/team/join/getSiteProfessionalList',
      params
    }),

  reviewJoin: () => http.get<PageResult<any>>({ url: '/site/team/join/reviewJoin' })
};
