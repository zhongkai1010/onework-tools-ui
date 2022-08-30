import { Ref } from 'vue';
import {
  DynamicFormField,
  DynamicFormLayout,
  DynamicFormProps,
  FormComponent,
} from '/@/components/DynamicForm';

export interface FormConfigDrawerProps {
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
  dataMode?: 'all' | 'static' | 'dynamic' | 'none';
  dataType?: 'string' | 'boolean' | 'number';
  props?: {
    name: string;
    component: FormComponent;
    props?: Recordable<any>;
  }[];
}

export const FORM_LIST_PROVIDE_KEY = 'formItems';

export const DEFAULT_DRAGGABLE_ITEM_CONFIG: DefaultDraggableItemConfig = {
  name: 'default',
  span: 6,
  defaultValue: undefined,
  props: {
    prop: 'default',
    label: '表单组件',
    labelWidth: undefined,
    required: false,
  },
  component: {
    component: 'el-input',
  },
  design: {
    dataMode: 'none',
  },
};
