/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-23 15:08:15
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-23 17:00:57
 * @FilePath: \onework-tools-ui\src\views\tools\model\useModel.ts
 * @Description:
 */
import modelApi, { Model, ModelProperty } from '/@/api/tools/model';
import { useHttpFetch } from '/@/hooks/fetch';

export default function useModel() {
  const getModelFetch = useHttpFetch(modelApi.getAllModels, null, {
    immediate: true
  });
  const currentModel = ref<Model>();
  const setCurrentModel = (model: Model) => (currentModel.value = model);
  const getModeIndex = (model: Model) => {
    return getModelFetch.data.value.findIndex((t) => t.id == model.id);
  };
  const selectOrg = ref<string>();
  const properties = computed<ModelProperty[]>({
    get: () => {
      if (!currentModel.value) return [];
      const index = getModeIndex(currentModel.value);
      const model = getModelFetch.data.value[index];
      let data: ModelProperty[] = model.properties;

      if (selectOrg.value) {
        data = data.filter((t) => t.orgId == selectOrg.value || !t.orgId);
      }
      return data;
    },
    set: (value) => {
      const index = getModeIndex(currentModel.value);
      getModelFetch.data.value[index].properties = value;
    }
  });
  const replaceModel = (model: Model) => {
    const index = getModeIndex(model);
    if (index >= 0) {
      getModelFetch.data.value.splice(index, 1, model);
    }
  };
  const addModel = (model: Model) => {
    getModelFetch.data.value.push(model);
  };
  const removeModel = (model: Model) => {
    const index = getModeIndex(model);
    getModelFetch.data.value.splice(index, 1);
    if (model.id == currentModel.value?.id) {
      currentModel.value = null;
    }
  };
  const saveModel = (model: Model) => {
    const index = getModeIndex(model);
    if (index >= 0) {
      replaceModel(model);
    } else {
      addModel(model);
    }
  };
  const getPropertyIndex = (property: ModelProperty) => {
    if (!currentModel.value) {
      throw new Error('');
    }
    const index = getModeIndex(currentModel.value);
    return getModelFetch.data.value[index].properties.findIndex((t) => t.id == property.id);
  };
  const removeProperty = (property: ModelProperty) => {
    const modeIndex = getModeIndex(currentModel.value);
    const propertyIndex = getPropertyIndex(property);
    getModelFetch.data.value[modeIndex].properties.splice(propertyIndex, 1);
    const children = getModelFetch.data.value[modeIndex].properties.filter((t) =>
      t.parentIds?.includes(`${property.id},`)
    );
    children.forEach((t) => {
      const temoIndex = getPropertyIndex(t);
      getModelFetch.data.value[modeIndex].properties.splice(temoIndex, 1);
    });
  };
  const saveProperty = (property: ModelProperty) => {
    const modeIndex = getModeIndex(currentModel.value);
    const propertyIndex = getPropertyIndex(property);
    getModelFetch.data.value[modeIndex].properties.splice(propertyIndex, 1, property);
  };
  return {
    ...getModelFetch,
    currentModel,
    setCurrentModel,
    saveModel,
    removeModel,
    removeProperty,
    saveProperty,
    properties,
    selectOrg
  };
}
