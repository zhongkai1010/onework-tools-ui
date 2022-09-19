export type DataType = 'string' | 'boolean' | 'function' | 'number' | 'array' | 'object';

export interface Component {
  name: string;
  displayName: string;
  props: ComponentProp[];
  category?: string;
  type?: string;
}

export interface ComponentProp {
  propertyName: string;
  description: string;
  dataType: DataType;
  defaultValue?: any;
  optionalValue?: any;
}
