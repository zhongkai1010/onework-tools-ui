import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  getInfo: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/getInfo' }),

  editInfo: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/editInfo' }),

  changeSMO: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/changeSMO' }),

  getEduList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/getEduList' }),
  editEdu: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/editEdu' }),
  removeEdu: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/removeEdu' }),

  getCertificateList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/getEduList' }),
  editCertificate: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/editEdu' }),
  removeCertificate: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/removeEdu' }),

  getTrainList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/getTrainList' }),
  editTrain: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/editTrain' }),
  removeTrain: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/removeTrain' }),

  getWorkList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/getWorkList' }),
  editWork: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/editWork' }),
  removeWork: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/removeWork' }),

  getProjectList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/getProjectList' }),
  editProject: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/editProject' }),
  removeProject: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/personal/archives/removeProject' })
};
