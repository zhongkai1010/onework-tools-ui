import { PageResult } from '/@/api/common';
import { http } from '../../../utils/http/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/manage/project/getList' }),
  createProject: () => http.get<PageResult<any>>({ url: '/manag/project/createProject' })
};
