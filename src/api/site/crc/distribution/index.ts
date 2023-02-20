import { PageResult } from '/@/api/common';
import { http } from '/@/utils/http/axios';

export default {
  getProfessionalList: () =>
    http.get<PageResult<any>>({ url: '/site/crc/distribution/getProfessionalList' }),
  getSMOList: () =>
    http.get<PageResult<any>>({ url: '/site/crc/distribution/getProfessionalList' }),
  getProfessionalCRCList: () =>
    http.get<PageResult<any>>({ url: '/site/crc/distribution/getProfessionalCRCList' }),
  getSMOCRCList: () => http.get<PageResult<any>>({ url: '/site/crc/distribution/getSMOCRCList' }),
  exportProfessionalAllCRC: () =>
    http.get<PageResult<any>>({ url: '/site/crc/distribution/exportProfessionalAllCRC' }),
  exportProfessionalCurrentCRC: () =>
    http.get<PageResult<any>>({ url: '/site/crc/distribution/exportProfessionalCurrentCRC' })
};
