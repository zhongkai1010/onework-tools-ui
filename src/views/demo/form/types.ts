import { Ref } from 'vue';
import { FormItemRule } from '/@/components/ConfigForm';
import { FormComponent, FormItemOption } from '/@/components/FormItem';

export interface FormConfigType {
  row: {
    gutter?: number;
    justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
    align?: 'top' | 'middle' | 'bottom';
  };
  form: {
    labelWidth?: number;
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
  };
}

export interface FormConfigDrawerInstance {
  open: () => void;
  config: Ref<FormConfigType>;
}

export interface FormItemDrawerInstance {
  open: (config: DraggableItemConfig) => void;
}

export interface DraggableItemConfig extends FormItemConfig {
  id: string;
}

export interface FormItemConfig {
  name: string;
  span?: number;
  defaultValue?: any;
  props: {
    // 表单项配置
    prop: string;
    label: string;
    labelWidth?: string;
    required: boolean;
    error?: string;
    rules?: FormItemRule[];
    showMessage?: boolean;
    inlineMessage?: boolean;
    size?: 'large' | 'default' | 'small';
    trigger?: 'blur' | 'change';
  };
  // 组件配置
  component: {
    component: FormComponent;
    props?: Recordable<any>;
    config?: {
      options?: FormItemOption[];
      remote?: boolean;
      remoteUrl?: string;
      remoteMethod?: 'post' | 'get';
      remoteParams?: Recordable<any>;
      labelKey?: string;
      valueKey?: string;
      childerKey?: string;
      searchKey?: string;
    };
  };
  design?: FormItemDesignConfig;
}

export interface FormItemDesignConfig {
  dataMode?: 'all' | 'static' | 'dynamic' | 'none';
  dataType?: 'string' | 'boolean' | 'number';
  props: {
    name: string;
    component: FormComponent;
    props?: Recordable<any>;
  }[];
}

// export interface FormItemComponentConfig {
//   label: string;
//   component: FormComponent;
//   value?: any;
//   props?: FormItemPropsConfig;
// }

// export interface FormItemRemoteConfig {
//   url: string;
//   method: 'post' | 'get';
//   labelKey: string;
//   valueKey: string;
//   childerKey?: string;
// }

// export interface FormItemPropsConfig extends Recordable<any> {
//   options: FormItemOption[];
//   remote: FormItemRemoteConfig;
//   readonly?: boolean;
//   disabled?: boolean;
// // }
// export interface DefaultFormItemComponentConfig
//   extends Omit<FormItemConfig, 'props' | 'formRules' | 'dataType'> {
//   props?: Omit<FormItemPropsConfig, 'options'>;
//   formRules?: FormItemRule[];
//   dataType?: 'all' | 'static' | 'dynamic' | 'none';
// }

// export interface FormItemRule {
//   pattern: string;
//   message: string;
// }

export const FORM_LIST_PROVIDE_KEY = 'formItems';

export const DEFAULT_DRAGGABLE_ITEM_CONFIG: FormItemConfig = {
  name: 'default',
  span: 6,
  defaultValue: '',
  props: {
    prop: 'default',
    label: '表单组件',
    labelWidth: undefined,
    required: false,
    error: undefined,
    rules: undefined,
    showMessage: undefined,
    inlineMessage: undefined,
    size: undefined,
    trigger: undefined,
  },
  component: {
    component: 'el-input',
  },
};
