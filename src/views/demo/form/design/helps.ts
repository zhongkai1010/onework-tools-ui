import { FormComponentConfig } from '/@/components/DynamicForm';
import ComponentData from '/@/components/DynamicForm/component';

export const getGroupComponent: (prefix: string) => FormComponentConfig[] = (prefix: string) => {
  return Object.keys(ComponentData)
    .filter((t) => t.startsWith(prefix))
    .map((t) => {
      return ComponentData[t];
    });
};
