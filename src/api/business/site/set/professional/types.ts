export interface SiteProfessional {
  /**
   * 专业科室id
   */
  deptId: string;
  /**
   * 专业科室名称
   */
  deptName: string;

  piList?: SiteProfessionalPI[];
}

export interface SiteProfessionalPI {
  /**
   * 工作号
   */
  jobNumber: string;
  /**
   * pi姓名
   */
  piName: string;
}

export interface SearchSiteProfessionalParams {
  deptName: string;
}
