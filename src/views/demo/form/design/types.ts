import { Ref } from 'vue';
import {
  DynamicFormConfig,
  DynamicFormField,
  FormComponentConfig,
} from '/@/components/DynamicForm';

export interface ComponentListType {
  name: string;
  title: string;
  components: FormComponentConfig[];
}

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
}

export const FORM_LIST_PROVIDE_KEY = 'formItems';

export const DEFAULT_DRAGGABLE_ITEM_CONFIG: DraggableItemConfig = {
  id: 'default',
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
};
