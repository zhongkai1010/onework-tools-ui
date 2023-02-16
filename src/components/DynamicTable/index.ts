import dynamicTable from './src/index.vue';
import dataTable from './src/DataTable.vue';
import { PaginationProps } from 'element-plus';
import { FormItemConfig } from '/@/components/DynamicForm';

export declare type OperateType =
  | 'add'
  | 'edit'
  | 'remove'
  | 'show'
  | 'refresh'
  | 'search'
  | 'column';

export interface DataTableConfig {
  title?: string;
  rowKey: string; // 数据主键
  serialNumber?: boolean; //是否显示序号
  fields: DataTableFieldConfig[]; // 字段
  multiple?: boolean; // 是否多选
  data?: Array<Recordable<any>>;
  pagination?: boolean | PaginationProps;
  toolbar?: OperateType[]; // 工具栏选项
  operate?: OperateType[];
  remote?: DataTableRemoteConfig;
  save?: DataTableRemoteConfig;
  remove?: DataTableRemoteConfig;
  props?: Recordable<any>;
}

export interface DataTableRemoteConfig {
  url: string;
  method: 'post' | 'get';
  params?: Recordable<any>;
}

export interface DataTableFieldConfig {
  label: string;
  name: string;
  hide?: boolean;
  type: 'string' | 'number' | 'array';
  props?: any;
  order?: number;
  editable?: Partial<DataTableFieldEditableConfig>;
}

export interface DataTableFieldEditableConfig {
  hide: boolean;
  span: number;
  defaultValue: any;
  component: FormItemConfig;
}

export interface FormDialogInstance {
  open: (
    editable?: 'add' | 'edit' | 'show',
    defaultValue?: Recordable<any>,
    title?: string
  ) => void;
  close: () => void;
}

export const DynamicTable = dynamicTable;
export const DataTable = dataTable;
export default DynamicTable;
