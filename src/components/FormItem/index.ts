import formItem from './src/index.vue';

export declare type FormComponent =
  | 'el-autocomplete'
  | 'el-cascader'
  | 'el-checkbox'
  | 'el-checkbox-group'
  | 'el-color-picker'
  | 'el-date-picker'
  | 'el-input-number'
  | 'el-input'
  | 'el-input-number'
  | 'el-radio-group'
  | 'el-radio'
  | 'el-rate'
  | 'el-select'
  | 'el-slider'
  | 'el-switch'
  | 'el-time-picker'
  | 'el-time-select'
  | 'el-transfer'
  | 'el-upload';

export interface FormItemOption {
  label: string;
  value: string;
  children?: FormItemOption[];
}

export interface FormItemRemote {
  url: string;
  method: 'post' | 'get';
  labelKey: string;
  valueKey: string;
  childerKey?: string;
}

export interface FormItemProps extends Recordable<any> {
  modelValue?: any;
  component: FormComponent;
  config?: Recordable<any>;
}

export interface FormItemSelectProps extends FormItemProps {
  config: {
    options: FormItemOption[];
  } & Recordable<any>;
}
export interface FormItemRemoteProps {
  config: Recordable<any> & {
    options: FormItemOption[];
    remote: FormItemRemote;
  };
}

export const FormItem = formItem;
export default FormItem;
