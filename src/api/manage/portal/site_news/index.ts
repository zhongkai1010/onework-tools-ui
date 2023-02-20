import { PageResult } from '/@/api/common';
import { http } from '/@/utils/http/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/manage/portal/site_news/getList' }),
  reviewSiteNews: () => http.get<PageResult<any>>({ url: '/manage/portal/news/reviewSiteNews' })
};
