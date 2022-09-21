/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-21 10:57:25
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-21 11:27:54
 * @FilePath: \onework-tools-ui\src\views\tools\model\helps.ts
 * @Description:
 */
import _ from 'lodash';
import { ModelTreeNode } from './types';
import { EditModel, Model, ModelProperty } from '/@/api/tools/model';
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
