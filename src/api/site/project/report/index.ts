import {
  GetPracticeCRCReportListSearchParams,
  GetPracticeCRCReportSearchParams,
  GetProjectReportListSearchParams,
  GetProjectReportSearchParams,
  PracticeCRCReport,
  ProjectReportDetail,
  ProjectReportReport,
  ReminderCRCData
} from './types';
import { RequestResult, ResponsePageData, ResponseData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  /**
   *  获取项目汇报列表
   * @returns
   */
  getProjectReportList: (params: GetProjectReportListSearchParams) =>
    http.get<RequestResult<ResponsePageData<ProjectReportReport>>>({
      url: '/site/project/report/getProjectReportList',
      params
    }),

  /**
   *  获取项目报表详情
   * @returns
   */
  getProjectReport: (params: GetProjectReportSearchParams) =>
    http.get<RequestResult<ResponseData<ProjectReportDetail>>>({
      url: '/site/project/report/getProjectReport',
      params
    }),

  /**
   *  提醒CRC填写项目汇报
   * @returns
   */
  reminderCRC: () => (data: ReminderCRCData) =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/site/project/report/getProjectReport',
      data
    }),

  /**
   * 获取实习CRC工作汇报
   * @returns
   */
  getPracticeCRCReportList: (params: GetPracticeCRCReportListSearchParams) =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/site/project/report/getPracticeCRCReportList',
      params
    }),

  /**
   *  查看实习CRC工作汇报详情
   * @returns
   */
  getPracticeCRCReport: (params: GetPracticeCRCReportSearchParams) =>
    http.get<RequestResult<ResponseData<PracticeCRCReport>>>({
      url: '/site/project/report/getPracticeCRCReport',
      params
    })
};
