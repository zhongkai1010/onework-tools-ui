import dynamicTable from './src/index.vue';
import dataTable from './src/DataTable.vue';
import { FormComponent } from '../DynamicForm';
import { PaginationProps } from 'element-plus';

export declare type OperateType =
  | 'add'
  | 'edit'
  | 'remove'
  | 'show'
  | 'refresh'
  | 'search'
  | 'column';

export interface DataTableProps {
  title?: string;
  rowKey?: string; // 数据主键
  serialNumber?: boolean; //是否显示序号
  fields: DataTableFieldProps[]; // 字段
  multiple?: boolean; // 是否多选
  data?: any[];
  pagination?: boolean | PaginationProps;
  toolbar?: OperateType[]; // 工具栏选项
  operate?: OperateType[];
  url?: string;
  table?: any;
}

export interface DataTableFieldProps {
  label: string;
  name: string;
  hide?: boolean;
  type: 'string' | 'number' | 'array';
  search?: {
    span: number;
    component: FormComponent;
    props?: any;
    defaultValue?: string | number | Array<string | number>;
  };
  order?: number;
  editable?: {
    hide?: boolean;
    span?: number;
    component: FormComponent;
    required?: boolean;
    rules?: any;
    defaultValue?: any;
  };
  props?: any;
}

export interface FormDialogInstance {
  open: (editable?: boolean, defaultValue?: Recordable<any>, title?: string) => void;
  close: () => void;
}

export const DynamicTable = dynamicTable;
export const DataTable = dataTable;
export default DynamicTable;
