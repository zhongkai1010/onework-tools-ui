import { PageResult } from '/@/api/common';
import { http } from '/@/utils/http/axios';

export default {
  getInfo: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/getInfo' }),

  editInfo: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/editInfo' }),

  changeSMO: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/changeSMO' }),

  getEduList: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/getEduList' }),
  editEdu: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/editEdu' }),
  removeEdu: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/removeEdu' }),

  getCertificateList: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/getEduList' }),
  editCertificate: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/editEdu' }),
  removeCertificate: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/removeEdu' }),

  getTrainList: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/getTrainList' }),
  editTrain: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/editTrain' }),
  removeTrain: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/removeTrain' }),

  getWorkList: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/getWorkList' }),
  editWork: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/editWork' }),
  removeWork: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/removeWork' }),

  getProjectList: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/getProjectList' }),
  editProject: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/editProject' }),
  removeProject: () => http.get<PageResult<any>>({ url: '/crc/personal/archives/removeProject' })
};
