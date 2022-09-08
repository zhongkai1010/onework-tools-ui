import _ from 'lodash';
import { Field, Property } from './types';

import { buildUUID } from '/@/utils/uuid';

export default function (data: Field[]) {
  const fields = ref<Field[]>(data);

  const add = (order?: number, parent?: string) => {
    const newField: Field = {
      uid: buildUUID(),
      name: '',
      displayName: '',
      type: 'string',
      required: false,
      order: order ?? 1
    };
    // 计算父级uid
    if (parent) {
      const field = fields.value.find((t) => t.uid == parent);
      if (!field) return;
      newField.parent = field.uid;
      newField.parentPath = `${(field.parentPath ?? '').concat(field.uid, ',')}`;
    }
    // 计算顺序
    if (_.isNumber(order)) {
      const laterFields = fields.value.filter(
        (t) => t.parent == parent && t.order >= newField.order
      );
      laterFields.forEach((t) => {
        const replaceField = t;
        const index = fields.value.findIndex((t) => t.uid === t.uid);
        replaceField.order += 1;
        fields.value.splice(index, 1, replaceField);
      });
    } else {
      const laterFields = fields.value.filter((t) => t.parent == parent);
      newField.order = laterFields.length + 1;
    }
    newField.name = `field${newField.order}`;
    newField.displayName = `字段名称${newField.order}`;
    fields.value.push(newField);
  };

  const get = (uid) => fields.value.find((t) => t.uid === uid);

  const remove = (uid: string) => {
    const deleteFields = fields.value.filter((t) => t.parentPath?.includes(uid)).map((t) => t.uid);
    deleteFields.push(uid);
    const indexs = deleteFields.map((t) => fields.value.findIndex((o) => o.uid == t));
    indexs.forEach((t) => fields.value.slice(t, 1));
  };

  const getProperties = (fields: Field[], parent?: string) => {
    if (!fields || !_.isArray(fields)) return [];
    const result: Property[] = [];
    const parents = fields.filter((t) => t.parent == parent).sort((a, b) => a.order - b.order);
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
    remove,
    add
  };
}
