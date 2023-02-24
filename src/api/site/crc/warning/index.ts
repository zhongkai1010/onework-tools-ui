import {
  CRCCertificateWarning,
  CRCProjectWarning,
  GetExpiredCertificateListSearchParams,
  GetProjectWarningListSearcParams
} from './types';
import { ResponsePageData, RequestResult } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  /**
   * 获取项目数过多预警列表数据
   * @param params
   * @returns
   */
  getProjectWarningList: (params: Partial<GetProjectWarningListSearcParams>) =>
    defHttp.get<RequestResult<ResponsePageData<CRCProjectWarning>>>({
      url: '/site/crc/warning/getProjectWarningList',
      params
    }),

  /**
   *  获取证书过期预警
   * @returns
   */
  getExpiredCertificateList: (params: Partial<GetExpiredCertificateListSearchParams>) =>
    defHttp.get<RequestResult<ResponsePageData<CRCCertificateWarning>>>({
      url: '/site/crc/warning/getExpiredCertificateList',
      params
    })
};
