/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-19 15:52:54
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-19 15:53:19
 * @FilePath: \onework-tools-ui\mock\page\tools\form.ts
 * @Description:
 */
export default [
  {
    url: '/api/tools/form/getAllForm',
    method: 'get',
    timeout: '2000',
    response: () => {
      const formMock = mock({
        'data|6-20': [
          {
            id: '@guid()',
            name: '@word(4,12)',
            displayName: '@ctitle(4,6)',
            modelId: '@guid()',
            props: [],
            url: '@url',
            'isSetp|1': true,
            'isGroup|1': true,
            remark: '@csentence()'
          }
        ]
      }) as { data: Form[] };
      const forms = [];
      formMock.data.forEach((element) => {
        const form = { ...element };
        form.fields = mock({
          'data|6-20': [
            {
              id: '@guid()',
              formId: form.id,
              name: '@word(4,12)',
              defaultValue: null,
              label: '@ctitle(4,6)',
              'showLabel|1': true,
              component: '@word(4,12)',
              props: {},
              'setp|1-3': 1,
              'group|1': ['group1', 'group2', 'group3'],
              remark: '@csentence()'
            }
          ]
        }).data;
        forms.push(form);
      });
      return {
        code: 0,
        result: forms
      };
    }
  }
];
