import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  getList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/expert/getList' }),
  add: () => defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/expert/add' }),
  update: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/expert/update' }),
  remove: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/expert/remove' })
};
