export type PropertyType = 'string' | 'number' | 'array' | 'boolean' | 'intger' | 'object';
export interface Property {
  name: string;
  title: string;
  type: PropertyType;
  arrayType?: PropertyType;
  required: boolean;
  remark?: string;
  fields?: Property[];
  enum?: string[];
  defalutValue?: any;
  mock?: string;
}
