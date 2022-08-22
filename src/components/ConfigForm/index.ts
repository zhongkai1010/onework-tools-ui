import { FormItemProps } from '../FormItem';
import configForm from './src/index.vue';

export interface ConfigFormProps {
  name: string;
  gutter: number;
  labelPosition: 'top' | 'left' | 'right';
  labelWidth: string | number;
  fields: FormItemProps[];
}

const ConfigForm = configForm;
export default ConfigForm;
