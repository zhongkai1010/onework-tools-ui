import { http } from '/@/plugins/axios';

export interface Model {
  id: string;
  name: string;
  displayName: string;
  properties: ModelProperty[];
}

export interface ModelProperty {
  id: string;
  modelId: string;
  name: string;
  displayName: string;
  propertyType: 'string' | 'number' | 'array' | 'boolean' | 'intger' | 'object';
  arrayType?: 'string' | 'number' | 'array' | 'boolean' | 'intger' | 'object';
  required: boolean;
  defaultValue?: string;
  parentId?: string;
  parentIds?: string;
  order: number;
  remark?: string;
}

export interface QueryModelParams {
  gourp?: string;
}

export type AddModelParams = Omit<Model, 'id'>;

export default {
  /**
   *  获取所有模块
   * @param params
   * @returns
   */
  getAllModel: (params: QueryModelParams) =>
    http.get<Model[]>({
      url: '/api/tool/model/getAllModel',
      data: params
    }),

  /**
   *  删除模块
   * @param params
   * @returns
   */
  deleteModel: (id: string) => http.post({ url: '/api/tool/model/deleteModel', data: { id } }),
  /**
   *  添加模块
   * @param params
   * @returns
   */
  addModel: (data: AddModelParams) => http.post({ url: '/api/tool/model/addModel', data })
};
