import { Result } from '/#/axios';
import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';
import { defHttp } from '/@/utils/http/axios';

export enum Api {
  getList = '/site/crc/entry/getList',
  getCRCWarning = '/site/crc/entry/getList',
  reviewApply = '/site/crc/entry/reviewApply'
}

export default {
  /**
   * 获取机构查看CRC申请加入机构审核记录
   * @param params
   * @returns
   */
  getList: (params: SearchCRCParams) =>
    defHttp.get<Result<BasicFetchResult<SiteApplyJoinCRCRecord>>>({
      url: Api.getList,
      params
    }),

  /**
   * 获取机构审核CRC加入机构时候，提醒存在跨院信息和跨院有多少项目信息
   * @param params
   * @returns
   */
  getCRCWarning: (uid: string) =>
    defHttp.get<Result<BasicFetchResult<SiteApplyJoinCRCRecord>>>({
      url: Api.getCRCWarning,
      params: { uid }
    }),

  /**
   * 审核CRC申请加入机构记录
   * @param data
   * @returns
   */
  reviewApply: (data: ReviewApplyParams) =>
    defHttp.post<Result<any>>({ url: Api.reviewApply, data })
};

export interface SearchCRCParams extends BasicPageParams {
  userName?: string;
  smoName?: string;
  roleType?: string;
}

export interface ReviewApplyParams {
  /**
   * 申请id集合
   */
  crcApprovalIds: string[];
  /**
   * 驳回原因
   */
  rejectReason?: string;
  /**
   * 审核状态，1通过 2驳回
   */
  status: number;
}

export interface SiteApplyJoinCRCRecord {
  /**
   * 申请记录id
   */
  crcApprovalId: string;
  /**
   * crc姓名
   */
  userName: string;

  /**
   * 角色类型，1正式CRC 2实习CRC
   */
  roleType: string;
  /**
   * 角色类型
   */
  roleTypeValue: string;

  /**
   * smo名称
   */
  smoName: string;

  /**
   * 申请时间
   */
  applyTime: string;
  /**
   * 审核状态， 0待审核 1已通过 2未通过
   */
  status: number;
  /**
   * 审核状态
   */
  statusValue: string;

  /**
   * 审核人
   */
  approveName: string;
  /**
   * 审核时间
   */
  approveTime: string;
  /**
   * 驳回理由
   */
  rejectReason: string;
}
