/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-21 10:57:25
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-21 14:34:40
 * @FilePath: \onework-tools-ui\src\views\tools\helps.ts
 * @Description:
 */
import _ from 'lodash';
import { Random } from 'mockjs';
import { ModelTreeNode } from './model/types';
import { DataType, EditModel, Model, ModelProperty } from '/@/api/tools/model';
import { ModelField } from '/@/components/Form/types';

export const ROOT_NODE_KEY = 'root';
export const DEFULT_MODEL: EditModel = {
  name: '',
  displayName: '',
  properties: []
};

export const getModelTreeData = (models: Model[]): ModelTreeNode => {
  const root: ModelTreeNode = {
    id: 'root',
    name: 'root',
    displayName: '所有模型',
    isLeaf: false,
    children: []
  };
  const data = _.groupBy(models, (t: Model) => t.group ?? '');
  const keys = _.sortBy(Object.keys(data));
  for (let i = 0; i < keys.length; i++) {
    const group = keys[i];
    if (group != '') {
      const groupNode: ModelTreeNode = {
        id: `${ROOT_NODE_KEY}_${group}`,
        name: `${ROOT_NODE_KEY}_${group}`,
        isLeaf: false,
        displayName: group,
        children: data[group].map((t) => {
          return { ...t, isLeaf: true };
        }) as ModelTreeNode[]
      };
      root.children.push(groupNode);
    } else {
      const nodes = _.sortBy(data[group]);
      for (let j = 0; j < nodes.length; j++) {
        const node = nodes[j];
        root.children.push({ ...node, isLeaf: true });
      }
    }
  }
  return root;
};

export const getField = (property: ModelProperty): ModelField => {
  const field: ModelField = {
    ...property,
    id: property.id,
    name: property.name,
    displayName: property.displayName,
    type: property.propertyType,
    array: property.arrayType,
    required: property.required,
    order: property.order,
    parent: property.parentId,
    parentPath: property.parentIds,
    remark: property.remark
  };
  return field;
};

export const getProperty = (field: ModelField): Omit<ModelProperty, 'modelId'> => {
  const property: Omit<ModelProperty, 'modelId'> = {
    ...field,
    id: field.id,
    name: field.name,
    displayName: field.displayName,
    propertyType: field.type,
    arrayType: field.array,
    required: field.required,
    parentId: field.parent,
    parentIds: field.parentPath,
    remark: field.remark
  };
  return property;
};

export const generateJson = (properties: ModelProperty[]) => {
  const result = {};
  const getValue = (type: DataType, property: ModelProperty) => {
    switch (type) {
      case 'string':
        return Random.string('lower', 5, 10);
      case 'boolean':
        return Random.boolean();
      case 'array':
        const array = [];
        const count = Random.integer(1, 5);
        for (let i = 0; i < count; i++) {
          array.push(getValue(property.arrayType ?? 'string', property));
        }
        return array;
      case 'intger':
        return Random.integer(1, 100);
      case 'number':
        return Random.float(1, 2);
      case 'object':
        const children = properties.filter((t) => t.parentId == property.id);
        const value = {};
        children.forEach((t) => {
          value[t.name] = getValue(t.propertyType, t);
        });
        return value;
    }
  };
  const roots = properties.filter((t) => t.parentId == null);
  roots.forEach((t) => {
    result[t.name] = getValue(t.propertyType, t);
  });
  return result;
};
