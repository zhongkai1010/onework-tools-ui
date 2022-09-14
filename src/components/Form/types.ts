export type ModelPropertyType = 'string' | 'number' | 'array' | 'boolean' | 'intger' | 'object';

export interface ModelProperty extends ModelField {
  children?: ModelProperty[];
}

export interface ModelField {
  id: string;
  name?: string;
  displayName?: string;
  type: ModelPropertyType;
  array?: ModelPropertyType;
  required?: boolean;
  remark?: string;
  parent?: string;
  parentPath?: string;
  order: number;
}

export const ModelPropertyTypeOptions = [
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
