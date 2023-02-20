import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/site/team/join/getList' }),
  reviewJoin: () => http.get<PageResult<any>>({ url: '/site/team/join/reviewJoin' })
};
