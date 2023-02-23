import {
  AddPersonnelManageSMOData,
  AddProfessionalCRCAdminData,
  AddSiteCRCAdminData,
  AddSMOCRCAdmin,
  CancelPersonnelManageProfessionalData,
  CancelPersonnelManageSMOData,
  CancelProfessionalCRCAdminData,
  CancelSMOCRCAdminData,
  PersonnelManageProfessional,
  ProfessionalCRCAdmin,
  RemoveSiteCRCAdmin,
  SearchPersonnelManageProfessionalParams,
  SearchPersonnelManageSMOParams,
  SearchProfessionalCRCAdminParams,
  SearchSiteCRCAdminParams,
  SearchSMOCRCAdminParams,
  SetPersonnelManageProfessionalData,
  SiteCRCAdmin
} from './types';
import { RequestResult, ResponseData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  /**
   *  获取机构CRC管理员
   * @returns
   */
  getSiteCRCAdminList: (params: SearchSiteCRCAdminParams) =>
    http.get<RequestResult<ResponseData<SiteCRCAdmin>>>({
      url: '/site/set/crc_admin/getSiteCRCAdminList',
      params
    }),

  /**
   * 添加机构CRC管理员
   * @returns
   */
  addSiteCRCAdmin: (data: AddSiteCRCAdminData) =>
    http.post<RequestResult<ResponseData<any>>>({
      url: '/site/set/crc_admin/addSiteCRCAdmin',
      data
    }),

  /**
   *
   * 取消机构CRC管理员
   * @returns
   */
  removeSiteCRCAdmin: (data: RemoveSiteCRCAdmin) =>
    http.post<RequestResult<ResponseData<any>>>({
      url: '/site/set/crc_admin/removeCRCAdmin',
      data
    }),

  /**
   * 获取科室管理员列表
   * @returns
   */
  getProfessionalCRCAdminList: (params: SearchProfessionalCRCAdminParams) =>
    http.get<RequestResult<ResponseData<ProfessionalCRCAdmin>>>({
      url: '/site/set/crc_admin/getProfessionalAdminList',
      params
    }),

  /**
   *  添加科室管理员
   * @returns
   */
  addProfessionalCRCAdmin: (data: AddProfessionalCRCAdminData) =>
    http.post<RequestResult<ResponseData<any>>>({
      url: '/site/set/crc_admin/addProfessionalCRCAdmin',
      data
    }),

  /**
   *  取消科室管理员
   * @returns
   */
  cancelProfessionalCRCAdmin: (data: CancelProfessionalCRCAdminData) =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/site/set/crc_admin/cancelProfessionalCRCAdmin',
      data
    }),

  /**
   *  获取机构人员管理科室列表
   * @param params
   * @returns
   */
  getPersonnelManageProfessionalList: (params: SearchPersonnelManageProfessionalParams) =>
    http.get<RequestResult<ResponseData<PersonnelManageProfessional[]>>>({
      url: '/site/set/crc_admin/getPersonnelManageProfessionalList',
      params
    }),

  /**
   * 设置人员管理科室
   * @param params
   * @returns
   */
  setPersonnelManageProfessional: (data: SetPersonnelManageProfessionalData) =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/site/set/crc_admin/getProfessionalAdminList',
      data
    }),

  /**
   * 设置人员管理科室
   * @param params
   * @returns
   */
  cancelPersonnelManageProfessional: (data: CancelPersonnelManageProfessionalData) =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/site/set/crc_admin/cancelPersonnelManageProfessional',
      data
    }),

  /**
   * 获取SMO公司的CRC管理员列表
   * @param params
   * @returns
   */
  getSMOCRCAdminList: (params: SearchSMOCRCAdminParams) =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/site/set/crc_admin/getSMOCRCAdminList',
      params
    }),

  /**
   * 添加SMO公司CRC管理员
   * @param data
   * @returns
   */
  addSMOCRCAdmin: (data: AddSMOCRCAdmin) =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/site/set/crc_admin/getSMOCRCAdminList',
      data
    }),

  /**
   * 取消SMO公司CRC管理员
   * @param data
   * @returns
   */
  cancelSMOCRCAdmin: (data: CancelSMOCRCAdminData) =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/site/set/crc_admin/getSMOCRCAdminList',
      data
    }),

  /**
   * 获取人员管理SMO公司CRC列表
   * @returns
   */
  getPersonnelManageSMOList: (params: SearchPersonnelManageSMOParams) =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/site/set/crc_admin/getSMOCRCAdminList',
      params
    }),

  /**
   * 添加人员管理SMO公司
   * @param params
   * @returns
   */
  addPersonnelManageSMO: (params: AddPersonnelManageSMOData) =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/site/set/crc_admin/addPersonnelManageSMO',
      params
    }),

  /**
   * 取消人员管理SMO公司
   * @param params
   * @returns
   */
  cancelPersonnelManageSMO: (data: CancelPersonnelManageSMOData) =>
    http.post<RequestResult<ResponseData<any>>>({
      url: '/site/set/crc_admin/cancelPersonnelManageSMO',
      data
    })
};
