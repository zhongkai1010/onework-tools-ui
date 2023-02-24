import {
  BadgeBuildRuleResult,
  GetListSearchParams,
  HandleBadge,
  SiteBadgeStatisticsResult,
  SiteCRCBadge
} from './types';
import {} from '/@/api/common';
import { RequestResult, ResponseData, ResponsePageData } from '/@/api/types';
import { defHttp } from '/@/utils/http/axios';

export default {
  /**
   * 查看在职CRC所有工作证的列表
   * @returns
   */
  getList: (params: GetListSearchParams) =>
    defHttp.get<RequestResult<ResponsePageData<SiteCRCBadge>>>({
      url: '/site/crc/badge/getList',
      params
    }),

  /**
   * 发放或归还工作证
   * @returns
   */
  handleBadge: (data: HandleBadge) =>
    defHttp.get<RequestResult<ResponseData<any>>>({ url: '/site/crc/badge/handleBadge', data }),

  /**
   *  获取机构工作证生成规则，如果系统自动生成，提前给一个编号
   * @returns
   */
  getBadgeBuildRule: () =>
    defHttp.get<RequestResult<ResponseData<BadgeBuildRuleResult>>>({
      url: '/site/crc/badge/getBadgeBuildRule'
    }),

  /**
   * 获取机构工作证统计情况
   */
  getSiteBadgeStatistics: () => {
    defHttp.get<RequestResult<ResponseData<SiteBadgeStatisticsResult>>>({
      url: '/site/crc/badge/getSiteBadgeStatistics'
    });
  }
};
