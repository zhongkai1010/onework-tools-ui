export interface GetProjectReportListSearchParams {
  userName: string;
}

export interface ProjectReportReport {
  /**
   * 项目简称
   */
  abbrName: string;
  /**
   * 确认状态
   */
  confirmStatus?: number;
  /**
   * crc名称
   */
  crcName: string;
  /**
   * 本期汇报时间
   */
  currentReoprtTime: string;
  /**
   * 科室名称
   */
  deptName: string;
  /**
   * 上次汇报时间
   */
  lastReoprtTime: string;
  /**
   * 项目id
   */
  projectId: string;
  /**
   * 项目编号
   */
  projectNumber: string;
  /**
   * pi名称
   */
  researcherName: string;
  /**
   * 方案编号
   */
  schemeNumber: string;
  /**
   * smo名称
   */
  smoName: string;
  /**
   * 申办方名称
   */
  sponsorName: string;
  /**
   * 更新状态
   */
  updateStatus?: number;
}

export interface ProjectReportDetail {
  /**
   * 确认状态 （0未确认 1已确认 2已退回）
   */
  confirmStatus: number;
  /**
   * 汇报内容
   */
  content: string;
  /**
   * 汇报id
   */
  reportId: string;
  /**
   * 汇报期数
   */
  stage: number;
}

export interface GetProjectReportSearchParams {
  project: string;
}

export interface ReminderCRCData {
  projectId: string;
}

export interface GetPracticeCRCReportListSearchParams {
  keyWord: string;
}

export interface PracticeCRCReport {
  /**
   * 汇报内容
   */
  content: string;
}

export interface GetPracticeCRCReportSearchParams {
  userId: string;
}
