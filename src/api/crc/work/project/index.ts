import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/crc/work/project/getList' }),

  searchProject: () => http.get<PageResult<any>>({ url: '/crc/work/project/searchProject' }),

  saveProject: () => http.get<PageResult<any>>({ url: '/crc/work/project/searchProject' }),

  shubmitProject: () => http.get<PageResult<any>>({ url: '/crc/work/project/shubmitProject' }),

  projectHandover: () => http.get<PageResult<any>>({ url: '/crc/work/project/projectHandover' }),

  setProjectStatus: () => http.get<PageResult<any>>({ url: '/crc/work/project/setProjectStatus' }),

  updateProject: () => http.get<PageResult<any>>({ url: '/crc/work/project/updateProject' }),

  setProjectRole: () => http.get<PageResult<any>>({ url: '/crc/work/project/setProjectRole' }),

  getAuditProjectList: () =>
    http.get<PageResult<any>>({ url: '/crc/work/entry/getAuditJoinProjectList' }),

  removeAuditProject: () =>
    http.get<PageResult<any>>({ url: '/crc/work/entry/removeAuditProject' }),

  editAuditProject: () => http.get<PageResult<any>>({ url: '/crc/work/project/editAuditProject' }),

  applyProjectJoinSite: () =>
    http.get<PageResult<any>>({ url: '/crc/work/project/applyProjectJoinSite' })
};
