import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  getJoinProjectList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({
      url: '/crc/work/project_audit/getJoinProjectList'
    }),

  getCreateProjectList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({
      url: '/crc/work/project_audit/getCreateProjectList'
    }),

  getFinalProjectList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({
      url: '/crc/work/project_audit/getFinalProjectList'
    }),

  getHandoverProjectList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({
      url: '/crc/work/project_audit/getHandoverProjectList'
    }),

  getUpdateProjectList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({
      url: '/crc/work/project_audit/getUpdateProjectList'
    })
};
