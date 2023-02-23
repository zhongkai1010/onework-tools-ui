import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  getJoinProjectList: () =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/crc/work/project_audit/getJoinProjectList'
    }),

  getCreateProjectList: () =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/crc/work/project_audit/getCreateProjectList'
    }),

  getFinalProjectList: () =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/crc/work/project_audit/getFinalProjectList'
    }),

  getHandoverProjectList: () =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/crc/work/project_audit/getHandoverProjectList'
    }),

  getUpdateProjectList: () =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/crc/work/project_audit/getUpdateProjectList'
    })
};
