import {
  AssociatedProjectCRCData,
  ConfirmProjectHandoverData,
  GetProjectAuditRecordListSearchParams,
  GetProjectListSearchParams,
  GettHandoverProjectRecordsSearchParams,
  HandoverProjectRecord,
  ProjectAuditRecord,
  RemoveProjectCRCData,
  ReviewProjectData,
  SiteProject,
  UpdateProjectStateData
} from './types';
import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  /**
   * 创建项目
   * @param data
   * @returns
   */
  createSiteProject: (data: Omit<SiteProject, 'projectId'>) =>
    defHttp.post<RequestResult<ResponseData<SiteProject>>>({
      url: '/site/project/manage/createSiteProject',
      data
    }),

  /**
   * 修改项目
   * @param data
   * @returns
   */
  editSiteProject: (data: Omit<SiteProject, 'projectId'>) =>
    defHttp.post<RequestResult<ResponseData<SiteProject>>>({
      url: '/site/project/manage/editSiteProject',
      data
    }),

  /**
   *
   *  获取项目基本信息
   * @returns
   */
  getProjectList: (params: Partial<GetProjectListSearchParams>) =>
    defHttp.get<RequestResult<ResponseData<SiteProject>>>({
      url: '/site/project/manage/getProjectList',
      params
    }),

  /**
   * 查看项目的工作汇报，包括查看当前，查看上一个，查看下一个
   * @returns
   */
  getProjectReport: (uid: string) =>
    defHttp.get<RequestResult<ResponseData<any>>>({
      url: '/site/project/manage/getProjectReport',
      params: { uid }
    }),

  /**
   * 查看项目详情
   * @returns
   */
  getProjectDetails: (uid: string) =>
    defHttp.get<RequestResult<ResponseData<SiteProject>>>({
      url: '/site/project/manage/getProjectDetails',
      params: { uid }
    }),

  /**
   * 关联项目CRC
   * @returns
   */
  associatedProjectCRC: (data: AssociatedProjectCRCData) =>
    defHttp.post<RequestResult<ResponseData<any>>>({
      url: '/site/project/manage/associatedProjectCRC',
      data
    }),

  /**
   * 移除项目CRC
   * @returns
   */
  removeProjectCRC: (data: RemoveProjectCRCData) =>
    defHttp.post<RequestResult<ResponseData<any>>>({
      url: '/site/project/manage/removeProjectCRC',
      data
    }),

  /**
   * 更新项目状态
   * @returns
   */
  updateProjectState: (data: UpdateProjectStateData) =>
    defHttp.post<RequestResult<ResponseData<any>>>({
      url: '/site/project/manage/updateProjectState',
      data
    }),

  /**
   * 获取项目审核的记录，其中包括CRC加入、CRC创建、CRC结题审核
   * @returns
   */
  getProjectAuditRecordList: (params: GetProjectAuditRecordListSearchParams) =>
    defHttp.get<RequestResult<ResponseData<ProjectAuditRecord>>>({
      url: '/site/project/manage/getProjectAuditRecordList',
      params
    }),

  /**
   * 审核项目审核
   * @param data
   * @returns
   */
  reviewProject: (data: ReviewProjectData) =>
    defHttp.get<RequestResult<ResponseData<ProjectAuditRecord>>>({
      url: '/site/project/manage/reviewProject',
      data
    }),

  /**
   *  获取项目交接记录列表
   * @param data
   * @returns
   */
  getHandoverProjectRecords: (params: GettHandoverProjectRecordsSearchParams) =>
    defHttp.get<RequestResult<ResponseData<HandoverProjectRecord>>>({
      url: '/site/project/manage/getHandoverProjectRecords',
      params
    }),

  /**
   *  机构确认项目交接
   * @param params
   * @returns
   */
  confirmProjectHandover: (data: ConfirmProjectHandoverData) =>
    defHttp.post<RequestResult<ResponseData<HandoverProjectRecord>>>({
      url: '/site/project/manage/getHandoverProjectRecords',
      data
    })
};
