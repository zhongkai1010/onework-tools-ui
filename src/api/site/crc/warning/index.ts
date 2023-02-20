import { PageResult } from '/@/api/common';
import { http } from '/@/utils/http/axios';

export default {
  getProjectList: () => http.get<PageResult<any>>({ url: '/site/crc/warning/getProjectList' }),
  getCertificateList: () =>
    http.get<PageResult<any>>({ url: '/site/crc/warning/getCertificateList' })
};
