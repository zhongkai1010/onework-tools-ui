import { FormItemRule, FormItemProps as EIFormItemProps } from 'element-plus';
import formItem from './src/index.vue';
import asynAutodcomplete from './src/asyn/AsynAutodcomplete.vue';
import asynCascader from './src/asyn/AsynCascader.vue';
import asynCheckbox from './src/asyn/AsynCheckbox.vue';
import asynRadio from './src/asyn/AsynRadio.vue';
import asynSelect from './src/asyn/AsynSelect.vue';
import asynTreeSelect from './src/asyn/AsynTreeSelect.vue';
import asynTable from './src/asyn/AsynTable.vue';

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
  | 'upload'
  | 'asyn_autodcomplete'
  | 'asyn_cascader'
  | 'asyn_checkbox'
  | 'asyn_radio'
  | 'asyn_select'
  | 'asyn_table'
  | 'asyn_treeSelect';

export const AsynAutodcomplete = asynAutodcomplete;
export const AsynCascader = asynCascader;
export const AsynCheckbox = asynCheckbox;
export const AsynRadio = asynRadio;
export const AsynSelect = asynSelect;
export const AsynTreeSelect = asynTreeSelect;
export const AsynTable = asynTable;

export interface FormItemOption {
  label: string;
  value: string;
  children?: FormItemOption[];
}
export interface FormItemProps extends Recordable<any> {
  label: string;
  name: string;
  span?: number;
  component: FormComponent;
  props?: EIFormItemProps;
  defaultValue?: any;
  required?: boolean;
  rules?: FormItemRule;
  options?: FormItemOption[];
}

export const FormItem = formItem;
export default FormItem;
