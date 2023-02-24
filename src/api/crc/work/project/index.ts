import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  getList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/getList' }),

  searchProject: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/searchProject' }),

  saveProject: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/searchProject' }),

  shubmitProject: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/shubmitProject' }),

  projectHandover: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/projectHandover' }),

  setProjectStatus: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/setProjectStatus' }),

  updateProject: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/updateProject' }),

  setProjectRole: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/setProjectRole' }),

  getAuditProjectList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({
      url: '/crc/work/entry/getAuditJoinProjectList'
    }),

  removeAuditProject: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/entry/removeAuditProject' }),

  editAuditProject: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/editAuditProject' }),

  applyProjectJoinSite: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/applyProjectJoinSite' })
};
