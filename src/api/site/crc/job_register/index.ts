import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export interface JobRegisterRecord {
  userName: string;
}

export interface GetListSearchParams {
  userName: string;
}

export default {
  /**
   * 获取在岗登记列表
   * @returns
   */
  getList: (params: GetListSearchParams) =>
    defHttp.get<RequestResult<ResponseData<JobRegisterRecord>>>({
      url: '/site/crc/job_register/getList',
      params
    })
};
