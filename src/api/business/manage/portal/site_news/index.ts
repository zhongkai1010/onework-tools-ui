import { RequestResult, ResponseData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  getList: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/site_news/getList' }),
  reviewSiteNews: () =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/news/reviewSiteNews' })
};
