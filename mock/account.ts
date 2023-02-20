import { Random } from 'mockjs';
import { Result } from '/#/axios';
import { LoginResult } from '/@/api/account';

export default [
  {
    url: '/basic-api/login',
    method: 'post',
    timeout: 2000,
    response: (): Result<LoginResult> => {
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
    url: '/basic-api/logout',
    method: 'post',
    timeout: 2000,
    response: (): Result<any> => {
      return {
        code: 0,
        message: Random.string(5, 10)
      };
    }
  }
];
