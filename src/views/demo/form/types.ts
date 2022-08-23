import { Ref } from 'vue';
import { ConfigFormItemProps } from '/@/components/ConfigForm';

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
  open: (config: ConfigFormItemProps) => void;
}

export interface DraggableItemProps extends ConfigFormItemProps {
  id: string;
}
