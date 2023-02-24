import { GetCRCListSearchParams, ProfessionalListResult, SiteCRC, SiteSMO } from './types';
import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  /**
   *  获取专业科室列表，包括人数统计
   * @returns
   */
  getProfessionalList: () =>
    defHttp.get<RequestResult<ResponseData<ProfessionalListResult>>>({
      url: '/site/crc/distribution/getProfessionalList'
    }),

  /**
   * 获取机构所有合作的SMO公司列表
   * @returns
   */
  getSMOList: () =>
    defHttp.get<RequestResult<ResponseData<SiteSMO>>>({
      url: '/site/crc/distribution/getProfessionalList'
    }),

  /**
   *  获取CRC列表
   * @returns
   */
  getCRCList: (params: GetCRCListSearchParams) =>
    defHttp.get<RequestResult<ResponseData<SiteCRC>>>({
      url: '/site/crc/distribution/getCRCList',
      params
    })
};
