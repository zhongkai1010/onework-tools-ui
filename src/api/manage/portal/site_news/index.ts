import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { http } from '/@/utils/http/axios';

export default {
  getList: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/site_news/getList' }),
  reviewSiteNews: () =>
    http.get<RequestResult<ResponseData<any>>>({ url: '/manage/portal/news/reviewSiteNews' })
};
