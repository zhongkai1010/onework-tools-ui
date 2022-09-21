import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';

import {
  DictionaryOption,
  GetConfigResult,
  GetUserInfoResult,
  LoginPwdResult
} from '/@/api/common';
import { Result } from '/#/axios';
import { DEFAULT_TITLE } from '/@/settings/constant';

export default [
  {
    url: '/api/getConfig',
    method: 'get',
    timeout: 2000,
    response: (): Result<GetConfigResult> => {
      return {
        code: 0,
        message: Random.string(5, 10),
        result: {
          title: DEFAULT_TITLE,
          version: '0.0.0.1',
          sid: Random.guid()
        }
      };
    }
  },
  {
    url: '/api/login/pwd',
    method: 'post',
    timeout: 2000,
    // statusCode: 500,
    response: (): Result<LoginPwdResult> => {
      return {
        code: 0,
        // message: Random.ctitle(8, 10),
        result: {
          token: Random.guid()
        }
      };
    }
  },
  {
    url: '/api/user/logout',
    method: 'post',
    timeout: 2000,
    response: (): Result<any> => {
      return {
        code: 0,
        message: Random.string(5, 10)
      };
    }
  },
  {
    url: '/api/user/getUserInfo',
    method: 'get',
    timeout: 2000,
    response: (): Result<GetUserInfoResult> => {
      return {
        code: 0,
        // message: Random.string(5, 10),
        result: {
          defaultName: Random.cname(),
          avatar: Random.pick(['/avatar01.png', '/avatar02.png'])
        }
      };
    }
  },

  {
    url: '/api/getOptions',
    method: 'get',
    timeout: 2000,
    response: ({ _query }): Result<DictionaryOption[]> => {
      return {
        code: 0,
        result: [
          {
            text: '组织1',
            value: '1'
          },
          {
            text: '组织2',
            value: '2'
          },
          {
            text: '组织3',
            value: '3'
          }
        ]
      };
    }
  }
] as MockMethod[];
