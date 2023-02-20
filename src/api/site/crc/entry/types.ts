export interface SiteAuditJoinCrcPageVo {
  /**
   * 申请时间
   */
  applyTime: string;
  /**
   *
   * 审核人
   */
  approveName: string;
  /**
   * 审核时间
   */
  approveTime: string;
  /**
   * 申请记录id
   */
  crcApprovalId: string;
  /**
   * 手机
   */
  phone: string;
  /**
   * 驳回理由
   */
  rejectReason: string;
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
   * 审核状态， 0待审核 1已通过 2未通过
   */
  status: number;
  /**
   * 审核状态
   */
  statusValue: string;
  /**
   * crc人员id
   */
  userId: string;
  /**
   * crc姓名
   */
  userName: string;
}
