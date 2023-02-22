export interface SiteCRCBadge {
  /**
   * crc用户id
   */
  userId: string;

  /**
   * crc姓名
   */
  userName: string;

  /**
   * 手机
   */
  phone: string;

  /**
   * smo公司
   */
  smoName: string;

  /**
   * 工作证状态
   */
  cardStatus: number;

  /**
   * 工作证编号
   */
  cardNo: string;

  /**
   * 领取日期
   */
  receiveDate: string;

  /**
   * 归还日期
   */
  returnDate: string;
}

export interface GetListSearchParams {
  userName: string;
}

export interface HandleBadge {
  receiveDate: string;
}

export interface BadgeBuildRuleResult {
  ruletype: number;
  cardNo?: string;
}

export interface SiteBadgeStatisticsResult {
  num: number;
}
