import { Ref } from 'vue';
import { FormComponent, FormItemOption } from '/@/components/FormItem';

export interface FormConfigType {
  gutter: number;
  labelWidth: number;
  labelPosition: 'left' | 'right' | 'top';
  size: 'large' | 'default' | 'small';
  justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
  align: 'top' | 'middle' | 'bottom';
}

export interface FormConfigDrawerInstance {
  open: () => void;
  config: Ref<FormConfigType>;
}

export interface FormItemDrawerInstance {
  open: (config: DraggableItemConfig) => void;
}

export interface FormItemComponentConfig {
  label: string;
  component: FormComponent;
  value?: any;
  props?: FormItemPropsConfig;
}

export interface FormItemConfig {
  component: FormComponent;
  name: string;
  label: string;
  placeholder?: string;
  span?: number;
  labelWidth?: number | string;
  width?: number | string;
  defaultValue?: any;
  props: FormItemPropsConfig;
  showLabel?: boolean;
  required?: boolean;
  formRules: FormItemRule[];
  dataType: 'all' | 'static' | 'dynamic' | 'none';
  componentConfig?: FormItemComponentConfig[];
}

export interface FormItemRemoteConfig {
  url: string;
  method: 'post' | 'get';
  labelKey: string;
  valueKey: string;
  childerKey?: string;
}

export interface FormItemPropsConfig extends Recordable<any> {
  options: FormItemOption[];
  remote: FormItemRemoteConfig;
  readonly?: boolean;
  disabled?: boolean;
}
export interface DefaultFormItemComponentConfig
  extends Omit<FormItemConfig, 'props' | 'formRules' | 'dataType'> {
  props?: Omit<FormItemPropsConfig, 'options'>;
  formRules?: FormItemRule[];
  dataType?: 'all' | 'static' | 'dynamic' | 'none';
}

export interface FormItemRule {
  pattern: string;
  message: string;
}
export interface DraggableItemConfig extends FormItemConfig {
  id: string;
}

export const FORM_LIST_PROVIDE_KEY = 'formItems';

export const DEFAULT_DRAGGABLE_ITEM_CONFIG: FormItemConfig = {
  component: 'input',
  name: 'name',
  label: '表单组件',
  placeholder: undefined,
  span: 6,
  labelWidth: undefined,
  width: undefined,
  defaultValue: undefined,
  props: {
    options: [],
    remote: {
      url: '',
      method: 'get',
      labelKey: 'lable',
      valueKey: 'value',
    },
    readonly: false,
    disabled: false,
  },
  showLabel: true,
  required: false,
  formRules: [],
  dataType: 'none',
  componentConfig: undefined,
};
