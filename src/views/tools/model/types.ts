/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-14 09:31:53
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-23 16:41:45
 * @FilePath: \onework-tools-ui\src\views\tools\model\types.ts
 * @Description:
 */
import { Model, ModelProperty } from '/@/api/tools/model';

export interface ModelEditInstance {
  open: (value?: Model) => void;
}

export interface PropertyEditInstance {
  open: (model: Model, property: ModelProperty) => void;
}

export interface ModelTreeInstance {
  selectNode: (value: ModelTreeNode) => void;
}

export interface ModelTreeNode extends Model {
  isLeaf?: boolean;
  children?: ModelTreeNode[];
}

export interface JsonPreviewInstance {
  open: (value: string) => void;
}
