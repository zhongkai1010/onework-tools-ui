import { ConfigFormProps } from '.';

export const getDefauleVlues = (props: ConfigFormProps) => {
  const values = {};
  (props.config.fields || []).forEach((value) => {
    values[value.name] = value.defaultValue;
  });

  return values;
};
