/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-20 09:07:06
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-21 15:54:53
 * @FilePath: \onework-tools-ui\src\api\tools\model.ts
 * @Description:
 */
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
  propertyType: DataType;
  arrayType?: DataType;
  required: boolean;
  defaultValue?: string;
  order: number;
  parentId: string | null;
  parentIds?: string;
  remark?: string;
  objectId?: string;
  objectName?: string;
}

export type DataType = 'string' | 'number' | 'array' | 'boolean' | 'intger' | 'object';

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
  getAllModels: () => http.get<Model[]>({ url: '/api/tools/model/getAllModels' }),
  /**
   *  获取模块和模块属性
   *
   * @returns
   */
  getModel: (id: string) => http.get<Model>({ url: '/api/tools/model/getModel', params: { id } }),
  /**
   *  删除模块
   *
   * @param params
   * @returns
   */
  deleteModel: (id: string) => http.post({ url: '/api/tools/model/deleteModel', params: { id } }),
  /**
   *  添加或修改模块
   * @param params
   * @returns
   */
  saveModel: (model: EditModel) =>
    http.post<Model>({ url: '/api/tools/model/saveModel', data: model }),
  /**
   *  获取模块属性集合
   * @param data
   */
  getModelProperties: (params: Recordable<any>) =>
    http.get<ModelProperty[]>({ url: '/api/tools/model/getAllModelProperties', params }),
  /**
   *  添加或修改模块属性
   * @param params
   * @returns
   */
  saveProperty: (data: ModelProperty) =>
    http.post<ModelProperty>({ url: '/api/tools/model/saveModelProperty', data }),

  /**
   *  删除模块属性
   * @param params
   * @returns
   */
  deleteProperty: (id: string) =>
    http.post({ url: '/api/tools/model/deleteModelProperty', data: { id } })
};
