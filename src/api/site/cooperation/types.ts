export interface SiteSponsor {
  /**
   * 公司id
   */
  companyId: string;
  /**
   * 公司名称
   */
  companyName: string;
  /**
   * 公司类型 0申办方 1CRO 2SMO
   */
  companyType: string;
  /**
   * SMO备案时间
   */
  filingTime: string;
  /**
   * 历史项目数
   */
  historyProjects: number;
  /**
   * SMO是否优选 0否 1是
   */
  isPreference: string;
  /**
   * 机构id
   */
  orgId: string;
  /**
   * 项目数量
   */
  projectNumber: number;
  /**
   * 在研项目数量
   */
  studyProjects: number;
  /**
   * 未启动项目数
   */
  unstartProjects: number;
}

export interface SearchSiteSponsorParams {
  companyName: string;
}

export interface SiteCompanyProject {
  uid: string;
}

export interface SearchSiteCompanyProjectParams {
  name: string;
}

export interface SiteSMO {
  name: string;
}

export interface SearchSiteSMOParams {
  name: string;
}

export interface SetSMOPreferredData {
  name: string;
}

export interface SMODetails {
  name: string;
}
