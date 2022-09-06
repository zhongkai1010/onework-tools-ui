import { FormRules } from 'element-plus';
import dynamicForm from './src/DynamicForm.vue';
import formItem from './src/FormItem.vue';
import formTypeSelect from './src/FormTypeSelect.vue';

export const DynamicForm = dynamicForm;
export const FormItem = formItem;
export const FormTypeSelect = formTypeSelect;

export default DynamicForm;

export type FormComponentType =
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
  | 'el-upload'
  | 'ow-form-set-data'
  | 'ow-form-set-rule';

export type FormComponentDataMode = 'all' | 'static' | 'dynamic' | 'none';

export interface FormComponentConfig {
  name: FormComponentType;
  displayName: string;
  isRule?: boolean;
  isData?: boolean;
  props?: FormComponentProps[];
}

export interface FormComponentProps {
  label: string;
  key: string;
  dataType: 'string' | 'number' | 'array' | 'boolean';
  component:
    | FormComponentType
    | {
        type: FormComponentType;
        config?: FormComponentDataConfig;
      };
}

export interface FormComponentDataConfig {
  dataMode: FormComponentDataMode;
  options?: FormComponentOption[];
  remote?: FormComponentRemote;
}

export interface FormComponentOption {
  label: string;
  value: string;
  children?: FormComponentOption[];
}

export interface FormComponentRemote {
  url: string;
  method: 'post' | 'get';
  params?: Recordable<any>;
  labelKey?: string;
  valueKey?: string;
  childerKey?: string;
  searchKey?: string;
}

export interface DynamicFormConfig {
  model?: Recordable<any>;
  name: string;
  url?: string;
  fields: DynamicFormField[];
  layout?: Partial<DynamicFormLayout>;
  props?: Partial<DynamicFormProps>;
  group?: boolean;
  step?: boolean;
  button?: boolean;
  submitText?: string;
  submitIcon?: string;
}

export interface DynamicFormField {
  name: string;
  span?: number;
  defaultValue?: any;
  showLabel?: boolean;
  props?: DynamicFormFieldProps;
  component: FormItemConfig;
  group?: string;
  step?: number;
}

export interface DynamicFormLayout {
  gutter: number;
  justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
  align: 'top' | 'middle' | 'bottom';
}

export interface DynamicFormProps {
  rules: FormRules;
  labelWidth: number | string;
  labelPosition: 'left' | 'right' | 'top';
  labelSuffix: string;
  hideRequiredAsterisk: boolean;
  requireAsteriskPosition: 'left' | 'right';
  showMessage: boolean;
  inlineMessage: boolean;
  statusIcon: boolean;
  validateOnRuleChange: boolean;
  size: 'large' | 'default' | 'small';
  disabled: boolean;
  scrollToError: boolean;
}

export interface DynamicFormFieldProps {
  prop: string;
  label?: string;
  labelWidth?: string | number;
  required?: boolean;
  verifies?: FormItemRule[];
  rules?: FormItemRule[];
  showMessage?: boolean;
  inlineMessage?: boolean;
  size?: 'large' | 'default' | 'small';
  trigger?: 'blur' | 'change';
}

export interface FormItemConfig {
  component: FormComponentType;
  props?: Recordable<any>;
  config?: FormComponentDataConfig;
}
export interface FormItemRule {
  pattern: string;
  message: string;
  required?: boolean;
}
