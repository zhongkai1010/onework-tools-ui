import { SiteAuditJoinCrcPageVo } from './types';
import { PageResult } from '/@/api/common';
import { http } from '/@/plugins/axios';

export default {
  getList: () => http.get<PageResult<SiteAuditJoinCrcPageVo>>({ url: '/site/crc/entry/getList' }),

  /**
   * 获取CRC发起加入机构审计记录详情
   * @returns
   */
  getDetails: () =>
    http.get<PageResult<SiteAuditJoinCrcPageVo>>({ url: '/site/crc/entry/getDetails' }),

  /**
   * 审核申请
   * @param data
   * @returns
   */
  approvalApplication: (data: any) =>
    http.post<PageResult<Boolean>>({ url: '/site/crc/entry/approvalApplication', data })
};
