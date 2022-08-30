import dynamicForm from './src/dynamicForm.vue';
import formItem from './src/FormItem.vue';

export const DynamicForm = dynamicForm;
export const FormItem = formItem;

export default DynamicForm;

export interface DynamicFormConfig {
  model?: Record<string, any>;
  name: string;
  fields: DynamicFormField[];
  layout?: DynamicFormLayout;
  props?: DynamicFormProps;
}

export interface DynamicFormProps {
  labelWidth?: number | string;
  labelPosition?: 'left' | 'right' | 'top';
  labelSuffix?: string;
  hideRequiredAsterisk?: boolean;
  requireAsteriskPosition?: 'left' | 'right';
  showMessage?: boolean;
  inlineMessage?: boolean;
  statusIcon?: boolean;
  validateOnRuleChange?: boolean;
  size?: 'large' | 'default' | 'small';
  disabled?: boolean;
  scrollToError?: boolean;
}

export interface DynamicFormLayout {
  gutter?: number;
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
  align?: 'top' | 'middle' | 'bottom';
}

export interface DynamicFormField {
  name: string;
  span?: number;
  defaultValue?: any;
  props: DynamicFormFieldProps;
  component: FormItemProps;
}

export interface DynamicFormFieldProps {
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
}

export interface FormItemRule {
  pattern: string;
  message: string;
}

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

export interface FormItemProps {
  modelValue?: any;
  component: FormComponent;
  props?: Recordable<any>;
  config?: FormItemConfig;
}

export interface FormItemConfig {
  options?: FormItemOption[];
  remote?: FormItemRemote;
}

export interface FormItemRemote {
  url: string;
  method: 'post' | 'get';
  params?: Recordable<any>;
  labelKey?: string;
  valueKey?: string;
  childerKey?: string;
  searchKey?: string;
}

export interface FormItemOption {
  label: string;
  value: string;
  children?: FormItemOption[];
}
