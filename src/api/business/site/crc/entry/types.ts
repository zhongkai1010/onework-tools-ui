export interface GetListSearchParams {
  userName: string;
  smoName: string;
  roleType: string;
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
