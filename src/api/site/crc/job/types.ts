export interface GetListSearchParams {
  userName: string;
  phone: string;
  smoName: string;
}

export interface SiteCRCProjectDispatchLetter {
  projectName: string;
}

export interface SiteCRCStatistics {
  total: number;
}

export interface SiteCRCProject {
  projectName: string;
}

export interface SiteCRCBadge {
  cardNo: string;
}

export interface getCRCHistoryProjectsSearchParams {
  page: number;
}

export interface CRCTransferProjectPromptData {
  total: number;
}

export interface SiteCRC {
  /**
   * CRC人员id
   */
  userId: string;
  /**
   * 姓名
   */
  userName: string;
  /**
   * 手机
   */
  phone: string;

  /**
   * smo名称
   */
  smoName: string;

  /**
   * 在研项目数
   */
  studyProjects: string;

  /**
   * 历史项目数
   */
  historyProjects: string;

  /**
   * 未启动项目数
   */
  unstartProjects: string;
}
