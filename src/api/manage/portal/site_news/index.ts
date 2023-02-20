import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getList: () => http.get<PageResult<any>>({ url: '/manage/portal/site_news/getList' }),
  reviewSiteNews: () => http.get<PageResult<any>>({ url: '/manage/portal/news/reviewSiteNews' })
};
