import { mock, Random } from 'mockjs';
import { Result } from '/#/axios';
import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/site/crc/entry/getList',
    method: 'get',
    timeout: 2000,
    response: ({ _params }): Result<any> => {
      return {
        code: 0,
        message: Random.string(5, 10),
        result: {
          items: mock({
            data: {
              crcApprovalId: Random.guid
            }
          }).data,
          total: Random.integer(1, 100)
        }
      };
    }
  }
] as MockMethod[];
