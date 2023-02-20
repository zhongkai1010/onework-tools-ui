import { PageResult } from '/@/api/common';
import { http } from '/@/utils/http/axios';

export default {
  getCompanyList: () => http.get<PageResult<any>>({ url: '/crc/personal/record/getCompanyList' }),

  uploadCompanyProof: () =>
    http.get<PageResult<any>>({ url: '/crc/personal/record/uploadCompanyProof' }),

  getProjectList: () => http.get<PageResult<any>>({ url: '/crc/personal/record/getProjectList' }),

  uploadProjectProof: () =>
    http.get<PageResult<any>>({ url: '/crc/personal/record/uploadProjectProof' })
};
