import { Result } from '/#/axios';
import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess } from 'mock/_util';
import Mock from 'mockjs';
export default [
  {
    url: '/basic-api/site/crc/entry/getList',
    method: 'get',
    timeout: 2000,
    response: ({ query }): Result<any> => {
      const data = Mock.mock({
        'data|100': [
          {
            crcApprovalId: '@guid',
            userName: '@cname',
            'roleType|1': [1, 2],
            'roleTypeValue|1': ['正式CRC ', '实习CRC'],
            smoName: '@csentence(5,10)',
            applyTime: '@date("yyyy-MM-dd")',
            'status|1': [0, 1, 2],
            'statusValue|1': ['待审核', '已通过', '未通过'],
            approveName: '@cname',
            approveTime: '@date("yyyy-MM-dd")',
            rejectReason: '@guid'
          }
        ]
      });

      return resultPageSuccess(query.page, query.pageSize, data.data);
    }
  }
] as MockMethod[];
