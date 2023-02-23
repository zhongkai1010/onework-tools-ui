import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  getList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/appointment/getList' }),

  initiateAppointment: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/appointment/initiateAppointment' })
};
