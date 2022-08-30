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

export interface FormItemProps {
  modelValue?: any;
  component: FormComponent;
  props?: Recordable<any>;
  config?: FormItemConfig;
}

export interface FormItemConfig extends Recordable<any> {
  options?: FormItemOption[];
  remote?: boolean;
  remoteUrl?: string;
  remoteMethod?: 'post' | 'get';
  remoteParams?: Recordable<any>;
  labelKey?: string;
  valueKey?: string;
  childerKey?: string;
  searchKey?: string;
}

export const FormItem = formItem;
export default FormItem;
