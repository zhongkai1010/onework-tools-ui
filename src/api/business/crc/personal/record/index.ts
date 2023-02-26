import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  getCompanyList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/record/getCompanyList' }),

  uploadCompanyProof: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({
      url: '/crc/personal/record/uploadCompanyProof'
    }),

  getProjectList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/record/getProjectList' }),

  uploadProjectProof: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({
      url: '/crc/personal/record/uploadProjectProof'
    })
};
