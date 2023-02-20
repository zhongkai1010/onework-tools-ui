import { PageResult } from '/@/api/common';
import { http } from '/@/utils/http/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/crc/work/badge/getList' })
};
