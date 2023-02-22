import { GetListSearchParams, SiteCRC, SiteCRCProject } from './types';
import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  /**
   *  获取离职中和已离职的CRC人员列表
   * @returns
   */
  getList: (params: GetListSearchParams) =>
    http.get<RequestResult<ResponsePageData<SiteCRC>>>({
      url: '/site/crc/dimission/getList',
      params
    }),

  /**
   *  获取CRC承接的项目情况
   * @returns
   */
  getCRCProjectList: (uid: string) =>
    http.get<RequestResult<ResponseData<SiteCRCProject>>>({
      url: '/site/crc/dimission/getCRCProjectList',
      params: { uid }
    })
};
