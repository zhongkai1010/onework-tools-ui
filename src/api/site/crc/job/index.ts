import {
  GetListSearchParams,
  SiteCRC,
  SiteCRCStatistics,
  SiteCRCProjectDispatchLetter,
  SiteCRCBadge,
  SiteCRCProject,
  getCRCHistoryProjectsSearchParams,
  CRCTransferProjectPromptData
} from './types';
import { ResponseData, ResponsePageData, RequestResult } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  /**
   *  获取正式和实习CRC列表,列表数据包括申请加入机构的备案简历数据
   * @returns
   */
  getList: (params: GetListSearchParams) =>
    http.get<RequestResult<ResponsePageData<SiteCRC>>>({ url: '/site/crc/job/getList', params }),

  /**
   * 获取CRC在机构参加项目的派遣函列表
   * @returns
   */
  getSiteProjectDispatchLetter: (uid: string) =>
    http.get<RequestResult<ResponseData<SiteCRCProjectDispatchLetter>>>({
      url: '/site/crc/job/getSiteProjectDispatchLetter',
      params: { uid }
    }),

  /**
   *   获取机构CRC人员统计
   * @param uid
   * @returns
   */
  getSiteCRCStatistics: () =>
    http.get<RequestResult<ResponseData<SiteCRCStatistics>>>({
      url: '/site/crc/job/getSiteCRCStatistics'
    }),

  /**
   *  获取CRC在本院的工作证
   * @param data
   * @returns
   */
  getCRCBadge: (uid: any) =>
    http.get<RequestResult<SiteCRCBadge>>({ url: '/site/crc/job/getSiteData', params: { uid } }),

  /**
   *  获取CRC在本院的当前项目
   * @param data
   * @returns
   */
  getCRCCurrentProjects: (uid: any) =>
    http.get<RequestResult<ResponsePageData<SiteCRCProject>>>({
      url: '/site/crc/job/getSiteData',
      params: { uid }
    }),

  /**
   *  获取CRC在本院的历史项目
   * @param data
   * @returns
   */
  getCRCHistoryProjects: (params: getCRCHistoryProjectsSearchParams) =>
    http.get<RequestResult<ResponseData<SiteCRCProject>>>({
      url: '/site/crc/job/getSiteData',
      params
    }),

  /**
   *  获取选择移交项目的CRC的预警提示
   * @param uid
   */
  getCRCTransferProjectPrompt: (uid: string) =>
    http.get<RequestResult<ResponsePageData<CRCTransferProjectPromptData>>>({
      url: '/site/crc/job/getCRCTransferProjectPrompt',
      params: { uid }
    }),

  /**
   * 移交项目
   * @param data
   * @returns
   */
  transferProject: (data: any) =>
    http.post<RequestResult<any>>({ url: '/site/crc/job/transferProject', data }),

  /**
   * 标记离职
   * @param data
   * @returns
   */
  markResignation: (data: any) =>
    http.post<RequestResult<any>>({ url: '/site/crc/job/markResignation', data })
};
