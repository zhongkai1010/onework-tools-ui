/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-21 16:48:46
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-21 17:13:24
 * @FilePath: \onework-tools-ui\src\views\tools\form\types.ts
 * @Description:
 */
import { Form } from '/@/api/tools/form';

export interface FormTreeNode extends Form {
  isLeaf?: boolean;
  children?: FormTreeNode[];
}

export interface FormTreeInstance {
  selectNode: (value: FormTreeNode) => void;
}
