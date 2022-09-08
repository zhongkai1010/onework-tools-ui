export type PropertyType = 'string' | 'number' | 'array' | 'boolean' | 'intger' | 'object';

export interface Property extends Omit<Field, 'parent' | 'uid'> {
  uid?: string;
  children?: Property[];
  disabled?: boolean;
  root?: boolean;
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
  parent?: string;
  parentPath?: string;
  order?: number;
}

export const PropertyTypeOptions = [
  {
    label: '字符串(string)',
    value: 'string'
  },
  {
    label: '数字(number)',
    value: 'number'
  },
  {
    label: '数组(array)',
    value: 'array'
  },
  {
    label: '布尔(boolean)',
    value: 'boolean'
  },
  {
    label: '整数(intger)',
    value: 'intger'
  },
  {
    label: '对象(object)',
    value: 'object'
  }
];
