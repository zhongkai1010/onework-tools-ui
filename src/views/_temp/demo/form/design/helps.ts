import { ComponentListType } from './types';
import { FormComponentConfig } from '/@/components/DynamicForm';
import ComponentData from '/@/components/DynamicForm/component';

export const getGroupComponent: (prefix: string) => FormComponentConfig[] = (prefix: string) => {
  return Object.keys(ComponentData)
    .filter((t) => t.startsWith(prefix))
    .map((t) => {
      return ComponentData[t];
    });
};

export const getComponentList: () => ComponentListType[] = () => {
  return [
    {
      name: 'base',
      title: '基础组件',
      components: getGroupComponent('el-')
    },
    {
      name: 'business',
      title: '业务组件',
      components: getGroupComponent('bl-')
    }
  ];
};
