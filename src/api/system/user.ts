import { PageResult, PaginatedRequest } from '../model/baseModel';
import { User } from '../model/page';
import { http } from '/@/plugins/axios';

export default {
  getPageAll: (params: PaginatedRequest) => {
    return http.get<PageResult<User>>({
      url: '/api/system/user/getPageAll',
      params,
    });
  },
};
