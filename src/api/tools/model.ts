import { http } from '/@/plugins/axios';

export interface Model {
  id: string;
  name: string;
  displayName: string;
  group?: string;
  properties?: ModelProperty[];
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
  parentId: string | null;
  parentIds?: string;
  order: number;
  remark?: string;
  objectId?: string;
  objectName?: string;
}

export interface EditModelProperty extends Omit<ModelProperty, 'id' | 'modelId'> {
  id?: string;
  modelId?: string;
}

export interface EditModel extends Omit<Model, 'id' | 'properties'> {
  id?: string;
  properties?: EditModelProperty[];
}

export default {
  /**
   *  获取所有模块
   *
   * @returns
   */
  getAllModels: () => http.get<Model[]>({ url: '/api/tools/model/getAll' }),
  /**
   *  获取模块和模块属性
   *
   * @returns
   */
  getModel: (id: string) => http.get<Model>({ url: '/api/tools/model/get', params: { id } }),
  /**
   *  删除模块
   *
   * @param params
   * @returns
   */
  deleteModel: (id: string) => http.post({ url: '/api/tools/model/delete', params: { id } }),
  /**
   *  添加或修改模块
   * @param params
   * @returns
   */
  saveModel: (model: EditModel) => http.post({ url: '/api/tools/model/save', data: model }),
  /**
   *  获取模块属性集合
   * @param data
   */
  getModelProperties: (params: Recordable<any>) =>
    http.get<ModelProperty[]>({ url: '/api/tools/modelProperty/getAll', params }),
  /**
   *  添加或修改模块属性
   * @param params
   * @returns
   */
  saveProperty: (data: ModelProperty) => http.post({ url: '/api/tools/modelProperty/save', data }),

  /**
   *  删除模块属性
   * @param params
   * @returns
   */
  deleteProperty: (id: string) =>
    http.post({ url: '/api/tools/modelProperty/delete', data: { id } })
};
