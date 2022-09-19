import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
export default [
  {
    url: '/api/system/page/getConfig',
    method: 'get',
    response: ({}) => {
      return {
        code: 0,
        result: Mock.mock({
          'fields|5-10': [
            {
              label: '@ctitle(4)',
              name: '@string("lower", 5)',
              'component|1': [
                'input',
                'select',
                'radio',
                'switch',
                'cascader',
                'checkbox',
                'datetimerange',
                'datepicker',
                'timepicker',
              ],
              span: 8,
              'fold|1': true,
              'options|1-5': [
                {
                  label: '@ctitle',
                  value: '@ctitle',
                },
              ],
            },
          ],
        }),
      };
    },
  },
] as MockMethod[];
