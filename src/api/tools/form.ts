export interface Form {
  id: string;
  name: string;
  displayName: string;
  modelId?: string;
  props?: Recordable<any>;
  url?: string;
  isSetp?: boolean;
  isGroup?: boolean;
  remark?: string;
  fields: FormField[];
}

export interface FormField {
  id: string;
  formId: string;
  name: string;
  defaultValue?: string;
  label?: string;
  showLabel?: boolean;
  component: string;
  props?: Recordable<any>;
  setp?: number;
  group?: string;
}

export default {};
