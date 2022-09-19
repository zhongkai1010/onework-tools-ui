/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-14 16:27:49
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-19 15:40:41
 * @FilePath: \onework-tools-ui\src\components\Form\types.ts
 * @Description:
 */
export type ModelPropertyType = 'string' | 'number' | 'array' | 'boolean' | 'intger' | 'object';

export interface ModelProperty extends ModelField {
  children?: ModelProperty[];
}

export interface ModelField {
  id: string;
  name?: string;
  displayName?: string;
  type: ModelPropertyType;
  array?: ModelPropertyType;
  required?: boolean;
  remark?: string;
  parent?: string;
  parentPath?: string;
  order: number;
}

export const ModelPropertyTypeMaps = {
  string: '字符串(string)',
  number: '数字(number)',
  array: '数组(array)',
  boolean: '布尔(boolean)',
  intger: '整数(intger)',
  object: '对象(object)'
};

export const ModelPropertyTypeOptions = Object.keys(ModelPropertyTypeMaps).map((t) => {
  return {
    text: ModelPropertyTypeMaps[t],
    value: t
  };
});
