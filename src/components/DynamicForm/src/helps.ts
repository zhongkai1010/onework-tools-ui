import { FormComponent, FormItemConfig } from '..';

export const getDefauleVlues = (items: FormItemConfig[]) => {
  const values = {};
  items.forEach((value) => {
    let defaultValue = value.defaultValue;
    if (value.component === FormComponent.CHECKBOX && defaultValue && value.props) {
      const option = value.props.options.find((t) => t.value === defaultValue);
      defaultValue = option.label;
    }
    values[value.name] = defaultValue;
  });
  return values;
};
