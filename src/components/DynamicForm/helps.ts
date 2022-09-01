import { DynamicFormField } from '.';

export const getFormDefauleVlue = (fields: DynamicFormField[]) => {
  const values = {};
  fields.forEach((value) => {
    values[value.name] = value.defaultValue;
  });

  return values;
};
