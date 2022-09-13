import { mock, Random } from 'mockjs';
import { Model, ModelProperty } from '/@/api/tool/model';

export default [
  {
    url: '/api/tool/model/getAllModel',
    method: 'get',
    timeout: '2000',
    response: () => {
      const modelMock = mock({
        'data|6-20': [{ id: '@guid()', name: '@ctitle()' }]
      }) as { data: Model[] };
      const models = [];
      modelMock.data.forEach((element) => {
        const model = { ...element };
        const properties = generateProperty(model, Random.integer(4, 20));
        model.properties = properties;
        models.push(model);
      });
      return {
        code: 0,
        result: models
      };
    }
  }
];

function generateChilds(model: Model, parent?: ModelProperty): ModelProperty[] {
  const result = [];
  const property: ModelProperty = {
    id: Random.guid(),
    modelId: model.id,
    name: Random.word(4, 12),
    displayName: Random.ctitle(4, 6),
    extended: Random.boolean(),
    propertyType: Random.pick(['string', 'number', 'array', 'boolean', 'intger', 'object']),
    arrayType: Random.pick(['string', 'number', 'array', 'boolean', 'intger', 'object']),
    required: Random.boolean(),
    defaultValue: null,
    parentId: null
  };
  if (parent) {
    property.parentId = parent.id;
    property.parentIds = (parent.parentIds ?? '').concat(parent.id, ',');
  }
  if (
    property.propertyType === 'object' ||
    (property.propertyType === 'array' && property.arrayType === 'object')
  ) {
    const count = Random.integer(4, 8);
    for (let i = 0; i < count; i++) {
      result.push(...generateChilds(model, property));
    }
  }
  result.push(property);
  return result;
}

function generateProperty(model: Model, count: number): ModelProperty[] {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(...generateChilds(model));
  }
  return result;
}