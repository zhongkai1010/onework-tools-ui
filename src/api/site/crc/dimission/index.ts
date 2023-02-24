import { GetListSearchParams, SiteCRC, SiteCRCProject } from './types';
import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  /**
   *  获取离职中和已离职的CRC人员列表
   * @returns
   */
  getList: (params: GetListSearchParams) =>
    defHttp.get<RequestResult<ResponsePageData<SiteCRC>>>({
      url: '/site/crc/dimission/getList',
      params
    }),

  /**
   *  获取CRC承接的项目情况
   * @returns
   */
  getCRCProjectList: (uid: string) =>
    defHttp.get<RequestResult<ResponseData<SiteCRCProject>>>({
      url: '/site/crc/dimission/getCRCProjectList',
      params: { uid }
    })
};
