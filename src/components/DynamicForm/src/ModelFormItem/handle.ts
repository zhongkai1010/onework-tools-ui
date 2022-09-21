/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-13 09:20:04
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-21 15:37:05
 * @FilePath: \onework-tools-ui\src\components\DynamicForm\src\ModelFormItem\handle.ts
 * @Description:
 */
import _ from 'lodash';
import { Field, Property } from './types';

import { buildUUID } from '/@/utils/uuid';

export default function (data?: Field[]) {
  const fields = ref<Field[]>(data || []);
  const get = (uid?) => fields.value.find((t) => t.uid === uid);
  const getChildren = (uid?) => fields.value.filter((t) => t.parent == uid);
  const getFollowingFields = (parent, order) =>
    fields.value.filter((t) => t.parent == parent && t.order >= order);
  const getIndex = (uid?) => fields.value.findIndex((t) => t.uid === uid);
  let max = 1;
  const add = (order?: number, parent?: string) => {
    const newField: Field = {
      uid: buildUUID(),
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
      newField.parent = field.uid;
      newField.parentPath = `${(field.parentPath ?? '').concat(field.uid, ',')}`;
    }

    // 计算顺序
    if (_.isNumber(order)) {
      newField.order = order + 1;
      const laterFields = getFollowingFields(parent, newField.order);
      laterFields.forEach((t) => {
        const replaceField = t;
        const index = getIndex(t.uid);
        replaceField.order += 1;
        fields.value.splice(index, 1, replaceField);
      });
    } else {
      const children = getChildren(parent);
      const lastOrder = children.length + 1;
      newField.order = lastOrder;
    }
    newField.name = `name${max}`;
    newField.displayName = `属性名称${max}`;
    fields.value.push(newField);
    max += 1;
  };

  const remove = (uid: string) => {
    const deleteFields = fields.value.filter((t) => t.parentPath?.includes(uid)).map((t) => t.uid);
    deleteFields.push(uid);
    const indexs = deleteFields.map(getIndex);
    indexs.forEach((t) => {
      fields.value.splice(t, 1);
    });
  };

  const getProperties = (fields: Field[], parent?: string) => {
    if (!fields || !_.isArray(fields)) return [];
    const result: Property[] = [];
    const parents = getChildren(parent).sort((a, b) => a.order - b.order);
    parents.forEach((t) => {
      const property: Property = t;
      property.children = getProperties(fields, property.uid);
      result.push(property);
    });
    return result;
  };

  return {
    fields,
    getProperties,
    get,
    getChildren,
    remove,
    add
  };
}
