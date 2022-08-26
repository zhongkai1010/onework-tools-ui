import { Ref } from 'vue';
import { FormComponent, FormItemOption } from '/@/components/FormItem';
import { buildUUID } from '/@/utils/uuid';

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
  open: () => void;
}

export interface FormItemComponentConfig {
  label: string;
  key: string;
  component: FormComponent;
  value?: any;
  props?: FormItemPropsConfig;
}
export interface FormItemRemoteConfig {
  url: string;
  method: 'post' | 'get';
  labelKey: string;
  valueKey: string;
  childerKey?: string;
}

export interface FormItemPropsConfig extends Recordable<any> {
  options?: FormItemOption[];
  remote?: FormItemRemoteConfig;
  readonly?: boolean;
  disabled?: boolean;
}

export interface DraggableItemConfig {
  id?: string;
  component: FormComponent;
  name: string;
  label: string;
  placeholder?: string;
  span?: number;
  labelWidth?: number | string;
  width?: number | string;
  defaultValue?: any;
  props?: FormItemPropsConfig;
  showLabel?: boolean;
  required?: boolean;
  formRules?: FormItemRuleType[];
  dataType?: 'all' | 'static' | 'dynamic' | 'none';
  componentConfig?: FormItemComponentConfig[];
}
export interface FormItemRuleType {
  pattern: string;
  message: string;
}
export type DraggableItemProps = DraggableItemConfig;

export const FORM_LIST_PROVIDE_KEY = 'formItems';

export const DEFAULT_DRAGGABLE_ITEM_CONFIG: DraggableItemConfig = {
  id: buildUUID(),
  component: 'input',
  name: 'name',
  label: '文本框',
  placeholder: '请输入用户名!',
  span: 6,
  labelWidth: '120px',
  width: '90%',
  defaultValue: 'value',
  props: {
    readonly: false,
    disabled: false,
  },
  showLabel: true,
  required: false,
  formRules: [
    {
      pattern: '^[A-Za-z0-9]+$',
      message: '请输入正确用户名称！',
    },
  ],
  dataType: 'all',
  componentConfig: [
    {
      label: '最大输入长度',
      key: 'maxlength',
      component: 'input',
    },
    {
      label: '最小输入长度',
      key: 'minlength',
      component: 'input',
    },
    {
      label: '是否可清空',
      key: 'clearable',
      component: 'switch',
    },
    {
      label: '显示密码图标',
      key: 'show-password',
      component: 'switch',
    },
  ],
};

export interface FormComponentDrawerState extends Recordable<any> {
  placeholder: boolean;
  remote: 'all' | 'state' | 'dynamic' | 'none';
}

export const FormComponentConfig: Recordable<FormComponentDrawerState> = {
  input: {
    placeholder: true,
    remote: 'none',
  },
};
