import { PageResult } from '/@/api/common';
import { http } from '/@/utils/http/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/site/crc/badge/getList' }),
  distribute: () => http.get<PageResult<any>>({ url: '/site/crc/badge/distribute' }),
  receive: () => http.get<PageResult<any>>({ url: '/site/crc/badge/receive' }),
  back: () => http.get<PageResult<any>>({ url: '/site/crc/badge/back' })
};
