/**
 * 返回对象
 *
 * ProjectInfoVo
 */
export interface SiteProject {
  /**
   * 项目简称
   */
  abbrName: string;
  /**
   * crc信息
   */
  crcList: Array<SiteProjectCRC[]>;
  /**
   * 部门信息，包含pi数据
   */
  deptList: SiteProjectProfessional[];
  /**
   * 适应症
   */
  indication: string;
  /**
   * 是否私有 （0否 1是）
   */
  isPrivate: string;
  /**
   * 科室pi信息
   */
  piList: SiteProjectPI[];
  /**
   * 项目id
   */
  projectId: string;
  /**
   * 项目编号
   */
  projectNumber: string;
  /**
   * 项目类型  0科研 1药物 2器械
   */
  projectType: string;
  /**
   * 项目类型名称
   */
  projectTypeName: string;
  /**
   * 方案编号
   */
  schemeNumber: string;
  /**
   * 机构id
   */
  siteId?: string;
  /**
   * 机构名称
   */
  siteName?: string;
  /**
   * 申办方信息
   */
  sponsorList: BaseMainCompanyVo[];
  /**
   * 项目阶段 （基于项目状态的自定义内容）
   */
  stage: string;
  /**
   * 项目状态（0待启动 1在研 2结题）
   */
  status: string;
  /**
   * 项目状态名称
   */
  statusName: string;
  /**
   * 试验分期
   */
  trialStage: string;
}

export interface GetProjectListSearchParams {
  /**
   * 项目简称，模糊查询
   */
  abbrName?: string;
  /**
   * crc名称，模糊查询
   */
  crcName?: string;
  /**
   * crc手机号，模糊查询
   */
  crcPhone?: string;
  /**
   * 科室名称，模糊查询
   */
  deptName?: string;
  /**
   * 有无crc 0没有 1有
   */
  hasCrc?: number;
  /**
   * pi名称，模糊查询
   */
  piName?: string;
  /**
   * 项目编号，模糊查询
   */
  projectNumber?: string;
  /**
   * 项目类型  0科研 1药物 2器械
   */
  projectType?: string;
  /**
   * 方案编号
   */
  schemeNumber?: string;
  /**
   * 搜索文本，模糊查询方案编号和项目简称
   */
  searchValue?: string;
  /**
   * smo名称，模糊查询
   */
  smoName?: string;
  /**
   * 申办方名称，模糊查询
   */
  sponsorName?: string;
  /**
   * 项目阶段 （基于项目状态的自定义内容）
   */
  stage?: string;
  /**
   * 项目状态（0待启动 1在研 2结题）
   */
  status?: string;
}

/**
 * ProjectCrcRelationVo
 */
export interface SiteProjectCRC {
  /**
   * 唯一编号
   */
  code: string;
  /**
   * crc派遣函文件id
   */
  crcDispatchLetterId: string;
  /**
   * crc派遣函文件url
   */
  crcDispatchLetterUrl: string;
  /**
   * 电话号码
   */
  phone: string;
  /**
   * crc项目角色
   */
  role: string;
  /**
   * crc项目角色名称
   */
  roleName: string;
  /**
   * 人员id
   */
  userId: string;
  /**
   * 姓名
   */
  userName: string;
}

/**
 * SiteProfessionalVo
 */
export interface SiteProjectProfessional {
  /**
   * 专业科室id
   */
  deptId: string;
  /**
   * 专业科室名称
   */
  deptName: string;
}

/**
 * SiteProfessionalPiVo
 */
export interface SiteProjectPI {
  /**
   * 专业科室id
   */
  deptId: string;
  /**
   * 专业科室名称
   */
  deptName: string;
  /**
   * 工号
   */
  jobNumber: string;
  piId: string;
  /**
   * pi姓名
   */
  piName: string;
  /**
   * 机构id
   */
  siteId: string;
  /**
   * 机构名称
   */
  siteName: string;
}

/**
 * BaseMainCompanyVo
 */
export interface BaseMainCompanyVo {
  /**
   * 公司id
   */
  companyId: string;
  /**
   * 公司名称
   */
  companyName: string;
}

export interface AssociatedProjectCRCData {
  /**
   * 项目id
   */
  projectId: string;
  /**
   * crc项目角色
   */
  role: string;
  /**
   * 人员id
   */
  userId: string;
}

export interface RemoveProjectCRCData {
  /**
   * 项目id
   */
  projectId: string;
  /**
   * 人员id
   */
  userId: string;
}

export interface UpdateProjectStateData {
  /**
   * 项目id
   */
  projectId: string;
  /**
   * 项目阶段
   */
  stage?: string;
  /**
   * 项目状态，0待启动 1在研 2结题
   */
  status?: string;
}

export interface ProjectAuditRecord {
  /**
   * 项目简称
   */
  abbrName: string;
  /**
   * 申请结题时间，结题申请必填
   */
  applyConclusionTime?: null | string;
  /**
   * 申请的完善crc信息，创建项目申请选填
   */
  applyCrcInfo?: null | SiteProject;
  /**
   * 申请人id
   */
  applyId: string;
  /**
   * 申请人
   */
  applyName: string;
  /**
   * 申请的完善项目信息，完善项目信息申请必有,json字符串
   */
  applyProjectInfo?: null | SiteProject;
  /**
   * 申请时间
   */
  applyTime: string;
  /**
   * 审核id
   */
  auditId: string;
  /**
   * 审核状态，0待审核 1已通过 2未通过
   */
  auditStatus: string;
  /**
   * 审核状态名称
   */
  auditStatusName: string;
  /**
   * 审核时间
   */
  auditTime?: null | string;
  /**
   * 审核类型，0crc加入项目 1crc创建项目 2结题 3完善项目信息
   */
  auditType: string;
  /**
   * 审核类型名称
   */
  auditTypeName: string;
  /**
   * 审核人id
   */
  auditUserId?: null | string;
  /**
   * 审核人
   */
  auditUserName?: null | string;

  project: SiteProject;
}

export interface GetProjectAuditRecordListSearchParams {
  /**
   * 申请人姓名，模糊查询
   */
  applyName?: string;
  /**
   * 审核状态，0 待审核 1已通过 2未通过
   */
  auditStatus?: string;
  /**
   * 审核类型，0 crc加入项目 1crc创建项目 2结题 3完善项目信息
   */
  auditType: string;
  /**
   * 是否完成审核，0 待审核 1已审核
   */
  isAudit?: string;
  /**
   * pi名称，模糊查询
   */
  piName?: string;
  /**
   * 项目编号，模糊查询
   */
  projectNumber?: string;
  /**
   * smo名称，模糊查询
   */
  smoName?: string;
}

export interface ReviewProjectData {
  auditId: string;
}

export interface GettHandoverProjectRecordsSearchParams {
  userName: string;
}

export interface HandoverProjectRecord {
  userName: string;
}

export interface ConfirmProjectHandoverData {
  projectId: string;
}
