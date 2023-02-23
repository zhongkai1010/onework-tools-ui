import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '../../../utils/http/axios';

export default {
  getList: () => http.get<RequestResult<ResponseData<any>>>({ url: '/manage/project/getList' }),
  createProject: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/manag/project/createProject' })
};
