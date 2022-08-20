import { FormItem } from '..';

export const getDefauleVlues = (items: FormItem[]) => {
  const values = {};
  items.forEach((value) => {
    let defaultValue = value.defaultValue;
    if (value.component === 'checkbox' && defaultValue && value.props) {
      const option = value.props.options.find((t) => t.value === defaultValue);
      defaultValue = option.label;
    }
    values[value.name] = defaultValue;
  });
  return values;
};
