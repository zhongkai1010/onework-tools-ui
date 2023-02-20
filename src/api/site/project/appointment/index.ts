import { PageResult } from '/@/api/common';
import { http } from '/@/utils/http/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/site/project/appointment/getList' }),

  reviewAppointment: () =>
    http.get<PageResult<any>>({ url: '/site/project/appointment/reviewAppointment' })
};
