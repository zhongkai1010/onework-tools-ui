import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getJoinProjectList: () =>
    http.get<PageResult<any>>({ url: '/crc/work/project_audit/getJoinProjectList' }),

  getCreateProjectList: () =>
    http.get<PageResult<any>>({ url: '/crc/work/project_audit/getCreateProjectList' }),

  getFinalProjectList: () =>
    http.get<PageResult<any>>({ url: '/crc/work/project_audit/getFinalProjectList' }),

  getHandoverProjectList: () =>
    http.get<PageResult<any>>({ url: '/crc/work/project_audit/getHandoverProjectList' }),

  getUpdateProjectList: () =>
    http.get<PageResult<any>>({ url: '/crc/work/project_audit/getUpdateProjectList' })
};
