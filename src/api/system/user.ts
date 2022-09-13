import { PageResult, PaginatedRequest } from '../common';
import { User } from './page';

import { http } from '/@/plugins/axios';

export default {
  getPageAll: (params: PaginatedRequest) => {
    return http.get<PageResult<User>>({
      url: '/api/system/user/getPageAll',
      params
    });
  }
};
