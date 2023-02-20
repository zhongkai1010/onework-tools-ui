import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getSponsorList: () => http.get<PageResult<any>>({ url: '/site/cooperation/getSponsorList' }),

  getSponsorProjectList: () =>
    http.get<PageResult<any>>({ url: '/site/cooperation/getSponsorProjectList' }),

  getSMOList: () => http.get<PageResult<any>>({ url: '/site/cooperation/getSMOList' }),

  setSMOPreferred: () => http.get<PageResult<any>>({ url: '/site/cooperation/setSMOPreferred' }),

  getSMOdetails: () => http.get<PageResult<any>>({ url: '/site/cooperation/getSMOdetails' })
};
