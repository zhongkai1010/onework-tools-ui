import { http } from '/@/utils/http/axios';
import { RequestResult, ResponseData } from '/@/api/types';
import { AppointmentRecord, ReviewAppointmentData } from './types';

export default {
  /**
   *  获取办事预约的列表接口
   * @returns
   */
  getList: () =>
    http.get<RequestResult<ResponseData<AppointmentRecord>>>({
      url: '/site/project/appointment/getList'
    }),

  reviewAppointment: (data: ReviewAppointmentData) =>
    http.get<RequestResult<ResponseData<any>>>({
      url: '/site/project/appointment/reviewAppointment',
      data
    })
};
