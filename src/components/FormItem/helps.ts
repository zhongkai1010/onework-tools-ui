import { FormItemProps } from '.';

export const getDefauleVlues = (items: FormItemProps[]) => {
  const values = {};
  items.forEach((value) => {
    let defaultValue = value.defaultValue;
    if (value.component === 'checkbox' && defaultValue && value.props) {
      const option = value.options.find((t) => t.value === defaultValue);
      defaultValue = option.label;
    }
    values[value.name] = defaultValue;
  });
  return values;
};
