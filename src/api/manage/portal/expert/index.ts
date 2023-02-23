import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  getList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/expert/getList' }),
  add: () => http.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/expert/add' }),
  update: () => http.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/expert/update' }),
  remove: () => http.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/expert/remove' })
};
