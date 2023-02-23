import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  getList: () => http.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/news/getList' }),
  add: () => http.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/news/add' }),
  update: () => http.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/news/update' }),
  remove: () => http.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/news/remove' })
};
