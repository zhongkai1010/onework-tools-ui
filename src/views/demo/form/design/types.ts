import { Ref } from 'vue';
import { DynamicFormConfig, DynamicFormField, FormItemConfig } from '/@/components/DynamicForm';




import {
  DynamicFormConfig,
  DynamicFormField,
  FormComponentConfig,
} from '/@/components/DynamicForm';
import { buildUUID } from '/@/utils/uuid';

export interface FormConfigDrawerInstance {
  open: () => void;
  config: Ref<DynamicFormConfig>;
}

export interface DynamicFormDesignConfig extends Omit<DynamicFormConfig, 'fields'> {
  fields: DraggableItemConfig[];
}

export interface FormItemDrawerInstance {
  open: (config: DraggableItemConfig) => void;
}

export interface DraggableItemConfig extends DynamicFormField {
  id: string;
  design?: DraggableItemDesign;
export interface ComponentListType {
  title: string;
  name: string;
  components: FormComponentConfig[];
}

export interface DefaultDraggableItemConfig extends Omit<DraggableItemConfig, 'id'> {
  design?: DraggableItemDesign;
}

export interface DraggableItemDesign {
  isRule?: boolean;
  items?: {
    key: string;
    label: string;
    component: FormItemConfig;

    value?: any;
  }[];
}

export interface DraggableFormConfig extends Omit<DynamicFormConfig, 'fields'> {
  fields: DraggableItemConfig[];
}

export interface DraggableItemConfig extends DynamicFormField {
  id: string;
}

export const FORM_LIST_PROVIDE_KEY = 'formItems';

export const DEFAULT_DRAGGABLE_ITEM_CONFIG: DefaultDraggableItemConfig = {
export const DEFAULT_DRAGGABLE_ITEM_CONFIG: DraggableItemConfig = {
  id: buildUUID(),
  name: 'default',
  span: 6,
  defaultValue: undefined,
  showLabel: true,
  props: {
    prop: '',
    label: '示例组件',
    labelWidth: undefined,
    required: false,
    verifies: [],
    showMessage: undefined,
    inlineMessage: undefined,
    size: undefined,
    trigger: undefined,
  },
  component: {
    component: 'el-input',
    props: {},
    config: {
      dataMode: 'all',
      options: [],
      remote: {
        url: '',
        method: 'get',
        params: undefined,
        labelKey: 'label',
        valueKey: 'value',
        childerKey: 'childer',
        searchKey: 'search',
      },
    },
  },
  design: {
    isRule: true,
    items: [
      {
        label: '最大输入长度',
        key: 'maxlength',
        component: {
          component: 'el-input-number',
        },
      },
      {
        label: '最小输入长度',
        key: 'minlength',
        component: {
          component: 'el-input-number',
        },
      },
      {
        label: '字数统计',
        key: 'showWordLimit',
        component: {
          component: 'el-switch',
        },
      },
      {
        label: '占位文本',
        key: 'placeholder',
        component: {
          component: 'el-input',
        },
      },
      {
        label: '是否可清空',
        key: 'clearable',
        component: {
          component: 'el-switch',
        },
      },
      {
        label: '文本类型',
        key: 'type',
        component: {
          component: 'el-select',
          config: {
            dataMode: 'static',
            options: [
              { label: '数字', value: 'number' },
              { label: '邮箱', value: 'email' },
            ],
          },
        },
      },
      {
        label: '显示切换密码',
        key: 'show-password',
        component: {
          component: 'el-switch',
        },
      },
      {
        label: '是否禁用',
        key: 'disabled',
        component: {
          component: 'el-switch',
        },
      },
      {
        label: '输入框尺寸',
        key: 'size',
        component: {
          component: 'el-select',
          config: {
            dataMode: 'static',
            options: [
              { label: 'large', value: 'large' },
              { label: 'default', value: 'default' },
              { label: 'small', value: 'small' },
            ],
          },
        },
      },
      {
        label: '自定义前缀图标',
        key: 'prefix-icon',
        component: {
          component: 'el-input',
        },
      },
      {
        label: '自定义后缀图标',
        key: 'suffix-icon',
        component: {
          component: 'el-input',
        },
      },
    ],
  },
};
