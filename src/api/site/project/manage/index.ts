import { PageResult } from '/@/api/common';
import { http } from '/@/utils/http/axios';

export default {
  getProjectList: () => http.get<PageResult<any>>({ url: '/site/project/manage/getProjectList' }),

  getProjectReport: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/getProjectReport' }),

  getProjectDetails: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/getProjectDetails' }),

  updateProjectStatus: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/updateProjectstatus' }),

  getProjectCRCList: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/getProjectCRCList' }),

  updateProjectCRC: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/updateProjectCRC' }),

  getJoinProjectList: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/getJoinProjectList' }),

  reviewJoinProject: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/reviewJoinProject' }),

  getCreateProjectList: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/getCreateProjectList' }),

  reviewCreateProject: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/reviewCreateProject' }),

  getFinalProjectList: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/getFinalProjectList' }),

  reviewFinalProject: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/reviewJoinProject' }),

  getUpdateProjectList: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/getUpdateProjectList' }),

  reviewUpdateProject: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/reviewUpdateProject' }),

  getProjectHandoverList: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/getProjectHandoverList' }),

  confirmProjectHandover: () =>
    http.get<PageResult<any>>({ url: '/site/project/manage/confirmProjectHandover' })
};
