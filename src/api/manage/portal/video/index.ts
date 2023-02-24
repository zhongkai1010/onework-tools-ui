import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  getList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/video/getList' }),
  add: () => defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/video/add' }),
  update: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/video/update' }),
  remove: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/video/remove' })
};
