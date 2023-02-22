import { GetCRCListSearchParams, ProfessionalListResult, SiteCRC, SiteSMO } from './types';
import { RequestResult, ResponseData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  /**
   *  获取专业科室列表，包括人数统计
   * @returns
   */
  getProfessionalList: () =>
    http.get<RequestResult<ResponseData<ProfessionalListResult>>>({
      url: '/site/crc/distribution/getProfessionalList'
    }),

  /**
   * 获取机构所有合作的SMO公司列表
   * @returns
   */
  getSMOList: () =>
    http.get<RequestResult<ResponseData<SiteSMO>>>({
      url: '/site/crc/distribution/getProfessionalList'
    }),

  /**
   *  获取CRC列表
   * @returns
   */
  getCRCList: (params: GetCRCListSearchParams) =>
    http.get<RequestResult<ResponseData<SiteCRC>>>({
      url: '/site/crc/distribution/getCRCList',
      params
    })
};
