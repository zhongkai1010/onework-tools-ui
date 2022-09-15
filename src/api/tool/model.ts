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

export interface SaveModelParam extends Omit<Model, 'id' | 'properties'> {
  id?: string;
  properties?: Omit<ModelProperty, 'id'>[];
}

export default {
  /**
   *  获取所有模块
   * @param params
   * @returns
   */
  getAllModel: () => http.get<Model[]>({ url: '/api/tool/model/getAllModel' }),
  /**
   *  删除模块
   * @param params
   * @returns
   */
  deleteModel: (id: string) => http.post({ url: '/api/tool/model/deleteModel', data: { id } }),
  /**
   *  添加或修改模块
   * @param params
   * @returns
   */
  saveModel: (data: SaveModelParam) => http.post({ url: '/api/tool/model/saveModel', data }),
  /**
   *  添加或修改模块属性
   * @param params
   * @returns
   */
  saveProperty: (data: ModelProperty) =>
    http.post({ url: '/api/tool/modelProperty/saveProperty', data }),

  /**
   *  删除模块属性
   * @param params
   * @returns
   */
  deleteProperty: (id: string) =>
    http.post({ url: '/api/tool/modelProperty/deleteProperty', data: { id } })
};
