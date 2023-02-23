import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  getCompanyList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/record/getCompanyList' }),

  uploadCompanyProof: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/record/uploadCompanyProof' }),

  getProjectList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/record/getProjectList' }),

  uploadProjectProof: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/record/uploadProjectProof' })
};
