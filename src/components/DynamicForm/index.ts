import { FormItemRule } from 'element-plus';
import dynamicForm from './src/index.vue';
import asynAutodcomplete from './src/components/AsynAutodcomplete.vue';
import formItem from './src/components/FormItem.vue';

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

const DynamicForm = dynamicForm;
export const DynamicFormItem = formItem;
export default DynamicForm;
