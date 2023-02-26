export interface ProfessionalListResult {
  /**
   * 科室id
   */
  deptId: string;
  /**
   * 科室名称
   */
  deptName: string;
  /**
   * 人数
   */
  people: number;
}

export interface SiteCRC {
  /**
   * 科室名称
   */
  deptName: string;
  /**
   * 历史项目数
   */
  history: number;
  /**
   * 跨院机构
   */
  interagencyName: string;
  /**
   * 跨院状态，（0否 1是）
   */
  interagencyStatus: number;
  /**
   * 未启动项目数
   */
  notStarted: number;
  /**
   * 手机
   */
  phone: string;
  /**
   * 性别
   */
  sex: number;
  /**
   * smo名称
   */
  smoName: string;
  /**
   * 在研项目数
   */
  underResearch: number;
  /**
   * crc用户id
   */
  userId: string;
  /**
   * crc姓名
   */
  userName: string;
}

export interface GetCRCListSearchParams {
  userName: string;
}

export interface SiteSMO {
  /**
   * 人数
   */
  people: number;
  /**
   * smoid
   */
  smoId: string;
  /**
   * smo名称
   */
  smoName: string;
}
