import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  getList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/video/getList' }),
  add: () => http.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/video/add' }),
  update: () => http.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/video/update' }),
  remove: () => http.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/video/remove' })
};
