import { FieldComponent } from '/#/layouts';

export interface TablePageConfig {
  title: string;
  path: string; //页面地址
  primary: string; // 数据主键
  url: string; // 请求数据url
  saveUrl: string; // 保存数据url
  fields: TablePageField[];
  toolbar?: any[]; // 工具栏选项
  multiple?: boolean; // 是否多选
  formRules: any;
}

export interface TablePageField {
  label: string;
  name: string;
  hide?: boolean;
  type: 'string' | 'number' | 'array';
  search?: boolean;
  searchSpan: number;
  component: FieldComponent;
  options?: { label: string; value: string }[];
  props?: Recordable<any>;
  defaultValue?: string | number | Array<string | number>;
  order?: number;
  editable?: boolean;
  editableSpan?: number;
}

export interface User {
  uid: string;
}
