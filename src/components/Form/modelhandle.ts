import _ from 'lodash';
import { ModelField, ModelProperty } from './types';

import { buildUUID } from '/@/utils/uuid';

export default function (fields?: ModelField[]) {
  const data = ref<ModelField[]>(fields || []);
  const get = (id: string) => data.value.find((t) => t.id === id);
  const getChildren = (id: string) => data.value.filter((t) => t.parent == id);
  const getFollowingFields = (parent: string | null, order: number) =>
    data.value.filter((t) => t.parent == parent && t.order >= order);
  const getIndex = (id: string) => data.value.findIndex((t) => t.id === id);
  let max = 1;
  const add = (order?: number, parent?: string) => {
    const newField: ModelField = {
      id: buildUUID(),
      name: '',
      displayName: '',
      type: 'string',
      required: false,
      order: order ?? 1,
      array: 'string'
    };

    // 计算父级uid
    if (parent) {
      const field = get(parent);
      if (!field) return;
      newField.parent = field.id;
      newField.parentPath = `${(field.parentPath ?? '').concat(field.id, ',')}`;
    }

    // 计算顺序
    if (_.isNumber(order)) {
      newField.order = order + 1;
      const laterFields = getFollowingFields(parent, newField.order);
      laterFields.forEach((t) => {
        const replaceField = t;
        const index = getIndex(t.id);
        replaceField.order += 1;
        data.value.splice(index, 1, replaceField);
      });
    } else {
      const children = getChildren(parent);
      const lastOrder = children.length + 1;
      newField.order = lastOrder;
    }
    newField.name = `field${max}`;
    newField.displayName = `字段名称${max}`;
    data.value.push(newField);
    max += 1;
  };

  const remove = (id: string) => {
    const deleteFields = data.value.filter((t) => t.parentPath?.includes(`${id},`) || t.id == id);
    deleteFields.forEach((t) => {
      const index = getIndex(t.id);
      data.value.splice(index, 1);
    });
  };

  const getProperties = (fields: ModelField[], parent?: string) => {
    if (!fields || !_.isArray(fields)) return [];
    const result: ModelProperty[] = [];
    const parents = getChildren(parent).sort((a, b) => a.order - b.order);
    parents.forEach((t) => {
      const property: ModelProperty = t;
      property.children = getProperties(fields, property.id);
      result.push(property);
    });
    return result;
  };

  return {
    data,
    getProperties,
    get,
    getChildren,
    remove,
    add
  };
}
