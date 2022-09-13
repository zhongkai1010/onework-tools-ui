import { http } from '/@/plugins/axios';

export interface Model {
  id: string;
  name: string;
  properties: ModelProperty[];
}

export interface ModelProperty {
  id: string;
  modelId: string;
  name: string;
  displayName: string;
  propertyType: 'string' | 'number' | 'array' | 'boolean' | 'intger' | 'object';
  arrayType: 'string' | 'number' | 'array' | 'boolean' | 'intger' | 'object';
  required: boolean;
  extended: boolean;
  defaultValue?: string;
  parentId?: string;
  parentIds?: string;
}

export interface ModelQueryParam {
  gourp?: string;
}

export default {
  /**
   *  获取所有数据
   * @param params
   * @returns
   */
  getAllModel: (params: ModelQueryParam) =>
    http.get<Model[]>({
      url: '/api/tool/model/getAllModel',
      data: params
    })
};
