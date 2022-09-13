import { TablePageField } from '../api/system/page';

export const initFieldsValue = (fields: TablePageField[]): Recordable<any> => {
  const value = {};
  for (let index = 0; index < fields.length; index++) {
    const field = fields[index];
    value[field.name] = field.defaultValue;
  }
  return value;
};
