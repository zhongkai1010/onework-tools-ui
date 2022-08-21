import { FormItemRule } from 'element-plus';
import configForm from './src/index.vue';
import asynAutodcomplete from './src/components/AsynAutodcomplete.vue';
import asynCascader from './src/components/AsynCascader.vue';
import asynCheckbox from './src/components/AsynCheckbox.vue';
import asynRadio from './src/components/AsynRadio.vue';
import asynSelect from './src/components/AsynSelect.vue';
import asynTreeSelect from './src/components/AsynTreeSelect.vue';
import formItem from './src/components/FormItem.vue';
import asynTable from './src/components/AsynTable.vue';

export declare type FormComponent =
  | 'autodcomplete'
  | 'cascader'
  | 'checkbox'
  | 'color_picker'
  | 'date_picker'
  | 'date_time_picker'
  | 'input'
  | 'input_number'
  | 'radio'
  | 'rate'
  | 'select'
  | 'slider'
  | 'switch'
  | 'time_picker'
  | 'time_select'
  | 'transfer'
  | 'upload';

export interface FormItemOption {
  label: string;
  value: string;
  children?: FormItemOption[];
}

export interface FormItemProps extends Recordable<any> {
  options?: FormItemOption[];
}

export interface FormItem {
  label: string;
  name: string;
  span?: number;
  component: FormComponent;
  props?: FormItemProps;
  defaultValue?: any;
  required?: boolean;
  rules?: FormItemRule;
}

export interface FormConfig {
  name: string;
  gutter: number;
  labelPosition: 'top' | 'left' | 'right';
  labelWidth: string | number;
  fields: FormItem[];
}

export const AsynAutodcomplete = asynAutodcomplete;
export const AsynCascader = asynCascader;
export const AsynCheckbox = asynCheckbox;
export const AsynRadio = asynRadio;
export const AsynSelect = asynSelect;
export const AsynTreeSelect = asynTreeSelect;
export const FormItem = formItem;
export const AsynTable = asynTable;

const ConfigForm = configForm;
export const ConfigFormItem = formItem;
export default ConfigForm;
