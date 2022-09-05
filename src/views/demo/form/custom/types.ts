export type PropertyType = 'string' | 'number' | 'array' | 'boolean' | 'intger' | 'object';
export interface Property {
  name: string;
  title: string;
  type: PropertyType;
  array?: PropertyType;
  required: boolean;
  remark?: string;
  fields?: Property[];
  enum?: string[];
  defalutValue?: any;
  mock?: string;
}

export interface Field {
  uid: string;
  name: string;
  displayName: string;
  type: PropertyType;
  array?: PropertyType;
  required: boolean;
  remark?: string;
  defalutValue?: any;
  enum?: string[];
  mock?: string;
}
