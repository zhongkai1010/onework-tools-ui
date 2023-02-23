import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  getList: () => http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/getList' }),

  searchProject: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/searchProject' }),

  saveProject: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/searchProject' }),

  shubmitProject: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/shubmitProject' }),

  projectHandover: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/projectHandover' }),

  setProjectStatus: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/setProjectStatus' }),

  updateProject: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/updateProject' }),

  setProjectRole: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/setProjectRole' }),

  getAuditProjectList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/entry/getAuditJoinProjectList' }),

  removeAuditProject: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/entry/removeAuditProject' }),

  editAuditProject: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/editAuditProject' }),

  applyProjectJoinSite: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/project/applyProjectJoinSite' })
};
