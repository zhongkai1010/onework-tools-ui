import { defHttp } from '/@/utils/http/axios';
import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import {
  CancelPIData,
  GetListSearchParams,
  ReviewApplyData,
  SearchApplyJoinRecordParams,
  SetProfessionalData,
  SiteProfessional,
  SiteTeamPersonnel
} from './types';

export default {
  /**
   *  获取机构团队人员列表
   * @returns
   */
  getList: (params: GetListSearchParams) =>
    defHttp.get<RequestResult<ResponsePageData<SiteTeamPersonnel>>>({
      url: '/site/team/getList',
      params
    }),

  /**
   * 获取专业科室
   * @returns
   */
  getProfessionalList: () =>
    defHttp.get<RequestResult<ResponseData<SiteProfessional>>>({
      url: '/site/team/getProfessionalList'
    }),

  /**
   * 设置专业科室
   * @param data
   * @returns
   */
  setProfessional: (data: SetProfessionalData) =>
    defHttp.post<RequestResult<ResponseData<any>>>({
      url: '/site/team/setProfessional',
      data
    }),

  /**
   * 设置PI
   * @param data
   * @returns
   */
  setPI: (data: SetProfessionalData) =>
    defHttp.post<RequestResult<ResponseData<any>>>({
      url: '/site/team/setPI',
      data
    }),

  /**
   * 取消PI
   * @param data
   * @returns
   */
  cancelPI: (data: CancelPIData) =>
    defHttp.post<RequestResult<ResponseData<any>>>({
      url: '/site/team/cancelPI',
      data
    }),

  /**
   *  获取审核内部人员加入申请
   * @returns
   */
  getApplyJoinRecordList: (params: SearchApplyJoinRecordParams) =>
    defHttp.get<RequestResult<ResponsePageData<SiteTeamPersonnel>>>({
      url: '/site/team/getApplyJoinRecordList',
      params
    }),

  /**
   *  审核人员申请加入记录
   * @param data
   * @returns
   */
  reviewApply: (data: ReviewApplyData) =>
    defHttp.get<RequestResult<ResponsePageData<any>>>({
      url: '/site/team/reviewApply',
      data
    })
};
