import { mock, Random } from 'mockjs';

export default [
  {
    url: 'd',
    method: 'get',
    timeout: '2000',
    response: () => {
      return {
        code: 0,
        result: 'OK'
      };
    }
  },
  {
    url: '/api/mock/get/400',
    method: 'get',
    statusCode: 400,
    timeout: '2000',
    response: () => {
      return {
        code: -1,
        message: 'Internal Server Error'
      };
    }
  },
  {
    url: '/api/mock/get/500',
    method: 'get',
    timeout: '2000',
    statusCode: 500,
    response: () => {
      return {
        code: -1,
        message: 'Internal Server Error'
      };
    }
  },
  {
    url: '/api/mock/get/timeout',
    method: 'get',
    timeout: '1000000',

    response: () => {
      return {
        code: -1,
        message: 'Internal Server Error'
      };
    }
  },
  {
    url: '/api/test/getOptions',
    method: 'get',
    // timeout: '5000',
    response: () => {
      return {
        code: 0,
        message: 'Internal Server Error',
        result: mock({
          'data|2-3': [
            {
              label: '@ctitle()',
              value: '@guid()'
            }
          ]
        }).data
      };
    }
  },

  {
    url: '/api/test/getTableData',
    method: 'get',
    timeout: '2000',
    response: () => {
      return {
        code: 0,
        // message: 'Internal Server Error',
        result: mock({
          'data|10-100': [
            {
              uid: '@guid',
              fieldName: '@string("lower",5,8)',
              'componentType|1': [
                'autodcomplete',
                'cascader',
                'checkbox',
                'color_picker',
                'date_picker',
                'date_time_picker',
                'input',
                'input_number',
                'radio',
                'rate',
                'select',
                'slider',
                'switch',
                'time_picker',
                'time_select',
                'transfer',
                'upload'
              ],
              title: '@ctitle()',
              placeholderTips: '@string',
              formGrid: '@string',
              labelWidth: '@string',
              componentWidth: '@string',
              defaults: '@string',
              minimum: '@string',
              maximum: '@string'
            }
          ]
        }).data
      };
    }
  },
  {
    url: '/api/test/getPageTableData',
    method: 'get',
    timeout: '2000',
    response: ({ query }) => {
      let data = mock({
        'data|200': [
          {
            uid: '@guid',
            fieldName: '@string("lower",5,8)',
            componentType: 'radio',
            title: '@ctitle()',
            placeholderTips: '@string',
            formGrid: '@string',
            labelWidth: '@string',
            componentWidth: '@string',
            defaults: '@string',
            minimum: '@string',
            maximum: '@string'
          }
        ]
      }).data;
      const total = Random.integer(query.pageSize ?? 10, 200);
      if (query.pageSize) {
        data = (data as any[]).slice(0, query.pageSize);
      }
      return {
        code: 0,
        message: 'Internal Server Error',
        result: mock({
          total: total,
          data
        })
      };
    }
  }
];
