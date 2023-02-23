import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  getInfo: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/getInfo' }),

  editInfo: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/editInfo' }),

  changeSMO: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/changeSMO' }),

  getEduList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/getEduList' }),
  editEdu: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/editEdu' }),
  removeEdu: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/removeEdu' }),

  getCertificateList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/getEduList' }),
  editCertificate: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/editEdu' }),
  removeCertificate: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/removeEdu' }),

  getTrainList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/getTrainList' }),
  editTrain: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/editTrain' }),
  removeTrain: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/removeTrain' }),

  getWorkList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/getWorkList' }),
  editWork: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/editWork' }),
  removeWork: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/removeWork' }),

  getProjectList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/getProjectList' }),
  editProject: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/editProject' }),
  removeProject: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/removeProject' })
};
