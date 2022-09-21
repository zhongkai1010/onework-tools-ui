import { mock, Random } from 'mockjs';
import { buildUUID } from '../../../src/utils/uuid';

let models: any[] = mock({
  'data|30-100': [
    {
      id: '@guid()',
      name: '@word(4,12)',
      displayName: '@ctitle(4,6)',
      'group|1': [null, '系统', '工具', '平台', '流程', '运维']
    }
  ]
}).data;

models = models.map((t: any) => {
  return { ...t, properties: generateProperties(t.id, Random.integer(4, 20)) };
});

export default [
  {
    url: '/api/tools/model/getAllModels',
    method: 'get',
    timeout: '2000',
    response: () => {
      return {
        code: 0,
        result: models.map((t) => {
          return { ...t, properties: undefined };
        })
      };
    }
  },
  {
    url: '/api/tools/model/getModel',
    method: 'get',
    timeout: '2000',
    response: ({ query }) => {
      const modelId = query.id;
      const model = models.find((t) => t.id == modelId);
      return {
        code: 0,
        result: model
      };
    }
  },
  {
    url: '/api/tools/model/deleteModel',
    method: 'post',
    timeout: '2000',
    response: ({ query }) => {
      const modelId = query.id;
      const index = models.findIndex((t) => t.id == modelId);
      models.splice(index, 1);
      return {
        code: index >= 0 ? 0 : -1,
        result: models
      };
    }
  },
  {
    url: '/api/tools/model/saveModel',
    method: 'post',
    timeout: '2000',
    response: ({ body }) => {
      const model = body;
      if (model.id) {
        const index = models.findIndex((t) => t.id == model.id);
        models.splice(index, 1, model);
      } else {
        model.id = buildUUID();
        model.properties = model.properties.map((t) => {
          return {
            ...t,
            id: buildUUID(),
            modelId: model.id,
            parentId: t.parentId ? t.parentId : null
          };
        });
        models.push(model);
      }
      return {
        code: 0,
        result: body
      };
    }
  },
  {
    url: '/api/tools/model/getAllModelProperties',
    method: 'get',
    timeout: '2000',
    response: ({ query }) => {
      const modelId = query.modelId;
      const objectId = query.objectId;
      const model = models.find((t) => t.id === modelId);
      if (!model) {
        return {
          code: 0,
          result: []
        };
      } else {
        let properties = model.properties;
        if (objectId) {
          properties = properties.filter((t) => t.objectId == objectId || !t.objectId);
        }
        return {
          code: 0,
          result: properties
        };
      }
    }
  },
  {
    url: '/api/tools/model/saveModelProperty',
    method: 'post',
    timeout: '2000',
    response: ({ body }) => {
      return {
        code: 0,
        result: { ...body, id: buildUUID() }
      };
    }
  },
  {
    url: '/api/tools/modelProperty/deleteModelProperty',
    method: 'post',
    timeout: '2000',
    response: ({ _query }) => {
      return {
        code: 0
      };
    }
  }
];

function generatePropertyChilds(modelId, parent?): any[] {
  const result: any[] = [];
  const random = Random.pick([1, 3, 4, 7, 9]); //随机组织
  const objectId = random % 2 == 0 ? Random.pick([1, 2, 3]) : null;

  let objectName = objectId;
  if (objectId) {
    objectName = objectId;
  }
  const property = {
    id: Random.guid(),
    modelId: modelId,
    name: Random.word(4, 12),
    displayName: Random.ctitle(4, 6),
    propertyType: Random.pick(['string', 'number', 'array', 'boolean', 'intger', 'object']),
    arrayType: Random.pick(['string', 'number', 'array', 'boolean', 'intger', 'object']),
    required: Random.boolean(),
    defaultValue: null,
    parentId: null,
    parentIds: null,
    objectId,
    objectName
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
      result.push(...generatePropertyChilds(modelId, property));
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

function generateProperties(modelId, count) {
  const result: any[] = [];
  for (let i = 0; i < count; i++) {
    const roots = generatePropertyChilds(modelId);
    result.push(...roots);
  }
  return result;
}
