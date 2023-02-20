import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/site/project/appointment/getList' }),

  reviewAppointment: () =>
    http.get<PageResult<any>>({ url: '/site/project/appointment/reviewAppointment' })
};
