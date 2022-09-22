/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-19 09:17:41
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-22 10:33:58
 * @FilePath: \onework-tools-ui\src\api\tools\form.ts
 * @Description:
 */
import { http } from '/@/plugins/axios';

export interface Form {
  id: string;
  modelId: string | null;
  name: string;
  displayName: string;
  group?: string;
  url?: string;
  isSetp?: boolean;
  isGroup?: boolean;
  isOperate?: boolean;
  props?: Recordable<any>;
  fields?: FormField[];
  remark?: string;
}

export interface FormField {
  id: string;
  formId: string;
  propertyId: string | null;
  label?: string;
  name: string;
  component: string;
  componentProps: Recordable<any> | null;
  span?: number;
  required?: boolean;
  defaultValue: string | null;
  showLabel?: boolean;
  setp: number | null;
  group: string | null;
  order: number;
  remark?: string;
  objectId?: string;
  objectName?: string;
}

export interface EditFormField extends Omit<FormField, 'id' | 'formId'> {
  id?: string;
  formId?: string;
}

export interface EditForm extends Omit<Form, 'id' | 'fields'> {
  id?: string;
  fields?: EditFormField[];
}

export default {
  /**
   *  获取所有表单
   *
   * @returns
   */
  getAllForms: () => http.get<Form[]>({ url: '/api/tools/form/getAllForms' }),
  /**
   *  获取表单和表单字段
   *
   * @returns
   */
  getForm: (id: string) => http.get<Form>({ url: '/api/tools/form/getForm', params: { id } }),
  /**
   *  删除表单
   *
   * @param params
   * @returns
   */
  deleteForm: (id: string) => http.post({ url: '/api/tools/form/deleteForm', params: { id } }),
  /**
   *  添加或修改表单
   * @param params
   * @returns
   */
  saveForm: (model: EditForm) => http.post<Form>({ url: '/api/tools/form/saveForm', data: model }),
  /**
   *  获取表单字段集合
   * @param data
   */
  getFormFields: (params: Recordable<any>) =>
    http.get<FormField[]>({ url: '/api/tools/form/getFormFields', params }),
  /**
   *  添加或修改表单字段
   * @param params
   * @returns
   */
  saveField: (data: FormField) => http.post<FormField>({ url: '/api/tools/form/saveField', data }),

  /**
   *  删除表单字段
   * @param params
   * @returns
   */
  deleteField: (id: string) => http.post({ url: '/api/tools/form/deleteField', data: { id } })
};
