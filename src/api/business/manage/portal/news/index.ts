import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  getList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/news/getList' }),
  add: () => defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/news/add' }),
  update: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/news/update' }),
  remove: () => defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/news/remove' })
};
