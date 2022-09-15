import { Model, ModelProperty } from '/@/api/tool/model';

export interface ModelEditInstance {
  open: (value?: Model) => void;
}

export interface PropertyEditInstance {
  open: (value: ModelProperty) => void;
}
