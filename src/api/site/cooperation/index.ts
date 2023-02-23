import { http } from '/@/utils/http/axios';
import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import {
  SearchSiteCompanyProjectParams,
  SearchSiteSMOParams,
  SearchSiteSponsorParams,
  SetSMOPreferredData,
  SiteCompanyProject,
  SiteSMO,
  SiteSponsor,
  SMODetails
} from './types';

export default {
  /**
   * 获取机构合作的申办方列表
   * @param params
   * @returns
   */
  getSponsorList: (params: SearchSiteSponsorParams) =>
    http.get<RequestResult<ResponsePageData<SiteSponsor>>>({
      url: '/site/cooperation/getSponsorList',
      params
    }),

  /**
   * 获取机构合适公司所在机构的项目列表
   * @param params
   * @returns
   */
  getCompanyProjectList: (params: SearchSiteCompanyProjectParams) =>
    http.get<RequestResult<ResponsePageData<SiteCompanyProject>>>({
      url: '/site/cooperation/getSponsorProjectList',
      params
    }),

  /**
   * 获取机构设置的SMO公司列表
   * @param params
   * @returns
   */
  getSMOList: (params: SearchSiteSMOParams) =>
    http.get<RequestResult<ResponsePageData<SiteSMO>>>({
      url: '/site/cooperation/getSMOList',
      params
    }),

  /**
   * 设置机构合作SMO为优选
   * @returns
   */
  setSMOPreferred: (data: SetSMOPreferredData) =>
    http.get<RequestResult<ResponsePageData<SetSMOPreferredData>>>({
      url: '/site/cooperation/setSMOPreferred',
      data
    }),

  /**
   * 获取SMO详情
   * @param uid
   * @returns
   */
  getSMODetails: (uid: string) =>
    http.get<RequestResult<ResponseData<SMODetails>>>({
      url: '/site/cooperation/getSMOdetails',
      params: { uid }
    })
};
