import { DynamicFormConfig } from '.';

export const getFormDefauleVlue = (props: DynamicFormConfig) => {
  const values = {};
  (props.fields || []).forEach((value) => {
    values[value.name] = value.defaultValue;
  });

  return values;
};
