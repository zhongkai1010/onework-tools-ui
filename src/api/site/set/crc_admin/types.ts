export interface SiteCRCAdmin {
  /**
   * 管理员
   */
  adminId: string;
  /**
   * 管理员类型，1主管理员 2子管理员 3机构CRC管理员 4科室CRC管理员 5公司CRC管理员
   */
  adminType: number;
  /**
   * 手机
   */
  phone: string;
  /**
   * 人员id
   */
  userId: string;
  /**
   * 姓名
   */
  userName: string;
}

export interface SearchSiteCRCAdminParams {
  userName: string;
  phone: string;
}

export interface RemoveSiteCRCAdmin {
  userName: string;
}

export interface AddSiteCRCAdminData {
  userName: string;
}

export interface SearchProfessionalCRCAdminParams {
  userName: string;
}

export interface AddProfessionalCRCAdminData {
  userName: string;
}

export interface ProfessionalCRCAdmin {
  userName: string;
}

export interface CancelProfessionalCRCAdminData {
  userName: string;
}

export interface SearchPersonnelManageProfessionalParams {
  userName: string;
}

export interface PersonnelManageProfessional {
  userName: string;
}
export interface SetPersonnelManageProfessionalData {
  userName: string;
}

export interface CancelPersonnelManageProfessionalData {
  userName: string;
}

export interface AddSMOCRCAdmin {
  userName: string;
}

export interface CancelSMOCRCAdminData {
  userName: string;
}

export interface SearchSMOCRCAdminParams {
  userName: string;
}

export interface SearchPersonnelManageSMOParams {
  userName: string;
}

export interface AddPersonnelManageSMOData {
  userName: string;
}

export interface CancelPersonnelManageSMOData {
  userName: string;
}
