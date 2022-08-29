import { FormItemProps } from '../FormItem';
import configForm from './src/index.vue';

export interface FormItemRule {
  pattern: string;
  message: string;
}

export interface ConfigFormProps extends Recordable<any> {
  model?: Record<string, any>;
  config: {
    name: string;
    fields: ConfigFormItemProps[];
    gutter?: number;
  };
}

export interface ConfigFormItemProps {
  name: string;
  span?: number;
  defaultValue?: any;
  props: {
    prop: string | string[];
    label: string;
    labelWidth?: string | number;
    required: boolean;
    error?: string;
    rules?: FormItemRule[];
    showMessage?: boolean;
    inlineMessage?: boolean;
    size?: 'large' | 'default' | 'small';
    trigger?: 'blur' | 'change';
  };
  component: { props?: Recordable<any> } & FormItemProps;
}

const ConfigForm = configForm;
export default ConfigForm;
