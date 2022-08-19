import { FormItemRule } from 'element-plus';
import dynamicForm from './src/index.vue';
import asynAutodcomplete from './src/components/AsynAutodcomplete.vue';
import asynCascader from './src/components/AsynCascader.vue';
import asynCheckbox from './src/components/AsynCheckbox.vue';
import asynRadio from './src/components/AsynRadio.vue';
import asynSelect from './src/components/AsynSelect.vue';
import asynTreeSelect from './src/components/AsynTreeSelect.vue';
import formItem from './src/components/FormItem.vue';
import asynTable from './src/components/AsynTable.vue';

export enum FormComponent {
  AUTODCOMPLETE = 'autodcomplete',
  CASCADER = 'cascader',
  CHECKBOX = 'checkbox',
  COLOR_RPICKER = 'color_picker',
  DATE_PICKER = 'date_picker',
  DATE_TIME_PICKER = 'date_time_picker',
  INPUT = 'input',
  INPUT_NUMBER = 'input_number',
  RADIO = 'radio',
  RATE = 'rate',
  SELECT = 'select',
  SLIDER = 'slider',
  SWITCH = 'switch',
  TIME_PICKER = 'time_picker',
  TIME_SELECT = 'time_select',
  TRANSFER = 'transfer',
  UPLOAD = 'upload',
}

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

const DynamicForm = dynamicForm;
export const DynamicFormItem = formItem;
export default DynamicForm;
