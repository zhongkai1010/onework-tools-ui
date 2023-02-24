import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  getList: () => defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/project/getList' }),
  createProject: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manag/project/createProject' })
};
