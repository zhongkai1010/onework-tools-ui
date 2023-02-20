import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/site/team/personnel/getList' }),

  getProfessionalList: () =>
    http.get<PageResult<any>>({ url: '/site/team/personnel/getProfessionalList' }),

  setProfessional: () => http.get<PageResult<any>>({ url: '/site/team/personnel/setProfessional' }),

  setPI: () => http.get<PageResult<any>>({ url: '/site/team/personnel/setPI' })
};
