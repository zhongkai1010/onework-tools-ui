import { Ref } from 'vue';
import {
  DynamicFormField,
  DynamicFormLayout,
  DynamicFormProps,
  FormItemProps,
} from '/@/components/DynamicForm';

export interface FormConfigDrawerProps {
  name: string;
  layout?: DynamicFormLayout;
  props?: DynamicFormProps;
}

export interface FormConfigDrawerInstance {
  open: () => void;
  config: Ref<FormConfigDrawerProps>;
}

export interface FormItemDrawerInstance {
  open: (config: DraggableItemConfig) => void;
}

export interface DraggableItemConfig extends DynamicFormField {
  id: string;
  design?: DraggableItemDesign;
}

export interface DefaultDraggableItemConfig extends Omit<DraggableItemConfig, 'id'> {
  design?: DraggableItemDesign;
}

export interface DraggableItemDesign {
  isRule?: boolean;
  items?: {
    label: string;
    component: FormItemProps;
    path: string;
  }[];
}

export const FORM_LIST_PROVIDE_KEY = 'formItems';

export const DEFAULT_DRAGGABLE_ITEM_CONFIG: DefaultDraggableItemConfig = {
  name: 'default',
  span: 6,
  defaultValue: undefined,
  props: {
    prop: '',
    label: '示例组件',
    labelWidth: undefined,
    required: false,
    error: undefined,
    rules: [],
    showMessage: undefined,
    inlineMessage: undefined,
    size: undefined,
    trigger: undefined,
  },
  component: {
    component: 'el-input',
    props: {},
    config: {
      dataMode: 'none',
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
  design: {},
};
