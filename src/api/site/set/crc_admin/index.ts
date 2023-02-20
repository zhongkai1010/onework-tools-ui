import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getSiteCRCAdminList: () =>
    http.get<PageResult<any>>({ url: '/site/set/crc_admin/getSiteCRCAdminList' }),

  addCRCAdmin: () => http.get<PageResult<any>>({ url: '/site/set/crc_admin/addCRCAdmin' }),

  removeCRCAdmin: () => http.get<PageResult<any>>({ url: '/site/set/crc_admin/removeCRCAdmin' }),

  getProfessionalAdminList: () =>
    http.get<PageResult<any>>({ url: '/site/set/crc_admin/getProfessionalAdminList' }),

  addProfessionalAdmin: () =>
    http.get<PageResult<any>>({ url: '/site/set/crc_admin/addProfessionalAdmin' }),

  removeProfessionalAdmin: () =>
    http.get<PageResult<any>>({ url: '/site/set/crc_admin/removeProfessionalAdmin' })
};
