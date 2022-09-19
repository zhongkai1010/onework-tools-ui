import { mock, Random } from 'mockjs';
import { Model, ModelProperty } from '/@/api/tools/model';
import { Form, FormField } from '/@/api/tools/form';

export default [
  {
    url: '/api/tools/model/getAllModel',
    method: 'get',
    timeout: '2000',
    response: () => {
      const modelMock = mock({
        'data|6-20': [{ id: '@guid()', name: '@word(4,12)', displayName: '@ctitle(4,6)' }]
      }) as { data: Model[] };
      const models = [];
      modelMock.data.forEach((element) => {
        const model = { ...element };
        const properties = generateProperties(model, Random.integer(4, 20));
        model.properties = properties;
        models.push(model);
      });
      return {
        code: 0,
        result: models
      };
    }
  },
  {
    url: '/api/tools/model/deleteModel',
    method: 'post',
    timeout: '2000',
    response: () => {
      return {
        code: 0
      };
    }
  },
  {
    url: '/api/tools/model/saveModel',
    method: 'post',
    timeout: '5000',
    response: () => {
      return {
        code: 0
      };
    }
  },
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

function generatePropertyChilds(model: Model, parent?: ModelProperty): ModelProperty[] {
  const result = [];
  const property: ModelProperty = {
    id: Random.guid(),
    modelId: model.id,
    name: Random.word(4, 12),
    displayName: Random.ctitle(4, 6),
    propertyType: Random.pick(['string', 'number', 'array', 'boolean', 'intger', 'object']),
    arrayType: Random.pick(['string', 'number', 'array', 'boolean', 'intger', 'object']),
    required: Random.boolean(),
    defaultValue: null,
    parentId: null,
    order: Random.integer(1, 100)
  };
  if (parent) {
    property.parentId = parent.id;
    property.parentIds = (parent.parentIds ?? '').concat(parent.id, ',');
  }
  if (
    property.propertyType === 'object' ||
    (property.propertyType === 'array' && property.arrayType === 'object')
  ) {
    const count = Random.integer(2, 4);
    for (let i = 0; i < count; i++) {
      result.push(...generatePropertyChilds(model, property));
    }
  }
  if (property.propertyType == 'array' && property.arrayType == 'array') {
    property.arrayType = 'string';
  }
  if (property.propertyType !== 'array') {
    property.arrayType = null;
  }
  result.push(property);
  return result;
}

function generateProperties(model: Model, count: number): ModelProperty[] {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(...generatePropertyChilds(model));
  }
  return result;
}
