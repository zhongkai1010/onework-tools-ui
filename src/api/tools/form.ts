import { http } from '/@/plugins/axios';

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
  label?: string;
  name: string;
  component: string;
  props?: Recordable<any>;
  span?: number;
  defaultValue?: string;
  showLabel?: boolean;
  setp?: number;
  group?: string;
  remark?: string;
}

export default {
  /**
   *  获取所有模块
   * @param params
   * @returns
   */
  getAllModel: () => http.get<Form[]>({ url: '/api/tools/form/getAllForm' })
};
