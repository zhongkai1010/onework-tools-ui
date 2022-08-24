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
  open: (config: DraggableItemProps) => void;
}

export interface DraggableItemProps {
  id?: string;
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
  rules?: { pattern: string; message: string }[];
  component: FormComponent;
}
