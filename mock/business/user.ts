/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-22 09:03:54
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-23 16:54:13
 * @FilePath: \onework-tools-ui\mock\common.ts
 * @Description:
 */
import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
import { Result } from '/#/axios';
import { CurrentUser } from '../../src/api/business/user';

export default [
  {
    url: '/basic-api/user/resetPassword',
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
    url: '/basic-api/user/changePhone',
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
    url: '/basic-api/user/getMessages',
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
    url: '/basic-api/user/getUserInfo',
    method: 'get',
    timeout: 2000,
    response: (): Result<CurrentUser> => {
      return {
        code: 0,
        // message: Random.string(5, 10),
        result: {
          displayName: Random.cname(),
          avatar: Random.pick(['/avatar01.png', '/avatar02.png'])
        }
      };
    }
  }
] as MockMethod[];
