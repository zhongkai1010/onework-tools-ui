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
  open: (id: string) => void;
}

export interface DraggableItemConfig {
  id?: string;
  component: FormComponent;
  name: string;
  label: string;
  placeholder?: string;
  span?: number;
  labelWidth?: number;
  width?: number;
  defaultValue?: any;
  props?: Recordable<any> & {
    options?: FormItemOption[];
    remote?: {
      url: string;
      method: 'post' | 'get';
      labelKey: string;
      valueKey: string;
      childerKey?: string;
    };
    readonly?: boolean;
    disabled?: boolean;
  };
  showLabel?: boolean;
  required?: boolean;
  formRules?: { pattern: string; message: string }[];
}

export type DraggableItemProps = DraggableItemConfig;

export const FORM_LIST_PROVIDE_KEY = 'formItems';

export const DEFAULT_DRAGGABLE_ITEM_CONFIG: DraggableItemConfig = {
  id: buildUUID(),
  component: 'input',
  name: '',
  label: '',
  props: {
    options: [] as FormItemOption[],
    remote: {
      method: 'get',
      url: '',
      labelKey: 'label',
      valueKey: 'value',
      childerKey: 'children',
    },
    readonly: false,
    disabled: false,
  },
  showLabel: true,
  required: false,
  formRules: [],
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
