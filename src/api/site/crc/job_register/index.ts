import { RequestResult, ResponseData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

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
    http.get<RequestResult<ResponseData<JobRegisterRecord>>>({
      url: '/site/crc/job_register/getList',
      params
    })
};
