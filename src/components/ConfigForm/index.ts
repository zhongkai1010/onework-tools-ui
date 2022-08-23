import { FormItemProps } from '../FormItem';
import configForm from './src/index.vue';
import { FormItemRule } from 'element-plus';

export interface ConfigFormProps {
  name: string;
  gutter: number;
  labelPosition: 'top' | 'left' | 'right';
  labelWidth: string | number;
  fields: ConfigFormItemProps[];
}

export interface ConfigFormItemProps extends FormItemProps {
  label: string;
  name: string;
  span?: number;
  defaultValue?: any;
  required?: boolean;
  rules?: FormItemRule;
}

const ConfigForm = configForm;
export default ConfigForm;
