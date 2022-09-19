/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-19 15:49:43
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-19 17:43:12
 * @FilePath: \onework-tools-ui\mock\page\tools\model.ts
 * @Description:
 */
import { mock, Random } from 'mockjs';
import { buildUUID } from '../../../src/utils/uuid';
import { OrganizationOption } from '../../common';

export default [
  {
    url: '/api/tools/model',
    method: 'get',
    timeout: '2000',
    response: () => {
      return {
        code: 0,
        result: mock({
          'data|6-200': [
            {
              id: '@guid()',
              name: '@word(4,12)',
              displayName: '@ctitle(4,6)',
              'group|1': [null, '系统', '工具', '平台', '流程', '运维']
            }
          ]
        }).data
      };
    }
  },
  {
    url: '/api/tools/model/delete',
    method: 'post',
    timeout: '2000',
    response: ({ _query }) => {
      return {
        code: 0
      };
    }
  },
  {
    url: '/api/tools/model/save',
    method: 'post',
    timeout: '2000',
    response: ({ data }) => {
      return {
        code: 0,
        result: { ...data, id: buildUUID() }
      };
    }
  },
  {
    url: '/api/tools/modelProperty',
    method: 'get',
    timeout: '2000',
    response: ({ query }) => {
      const modelId = query.modelId;
      return {
        code: 0,
        result: generateProperties(modelId, Random.integer(4, 20))
      };
    }
  },
  {
    url: '/api/tools/modelProperty/save',
    method: 'post',
    timeout: '2000',
    response: ({ data }) => {
      return {
        code: 0,
        result: { ...data, id: buildUUID() }
      };
    }
  },
  {
    url: '/api/tools/modelProperty/delete',
    method: 'post',
    timeout: '2000',
    response: ({ _query }) => {
      return {
        code: 0
      };
    }
  }
];

const OrganizationValues = Object.keys(OrganizationOption).map((t) => {
  return OrganizationOption[t].value;
});

function generatePropertyChilds(modelId, parent?): any[] {
  const result = [];
  const random = Random.pick([1, 3, 4, 7, 9]); //随机组织
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
    order: Random.integer(1, 100),
    objectId: random % 2 == 0 ? Random.pick(OrganizationValues) : null
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
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(...generatePropertyChilds(modelId));
  }
  return result;
}
