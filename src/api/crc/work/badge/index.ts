import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  getList: () => defHttp.get<RequestResult<ResponseData<any>>>({ url: '/crc/work/badge/getList' })
};
