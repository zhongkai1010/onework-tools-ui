<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-13 09:34:46
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-21 14:56:11
 * @FilePath: \onework-tools-ui\src\views\tools\model\index.vue
 * @Description:
-->
<template>
  <page-view
    class="container"
    :gutter="0"
    :bgColor="false"
    v-loading="getPropertyFetch.isFetching.value"
  >
    <el-row :gutter="20">
      <el-col :span="4">
        <CardTitle title="数据模型" icon="carbon:model-alt">
          <template #button>
            <el-button type="primary" @click="onEditModel()">创建</el-button>
          </template>
          <ModelTree
            ref="modelTreeRef"
            v-loading="getModelFetch.isFetching.value"
            :data="getModelFetch.data.value ?? []"
            @select="onSelectModel"
            @edit="(value) => onEditModel(value)"
            @remove="onRemoveModel"
          />
        </CardTitle>
      </el-col>
      <el-col :span="20">
        <CardTitle :title="title" icon="carbon:property-relationship">
          <template #button>
            <FormSelectDictionary
              :name="DictionarNameEnum.ORGANIZATION"
              v-model="selectOrg"
              style="margin-right: 5px"
              placeholder="请选择组织"
              clearable
              @change="onChangeOrg"
            />
            <el-dropdown @command="onClickCommand">
              <el-button type="primary"> 生成代码 </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="form">表单配置</el-dropdown-item>
                  <el-dropdown-item command="table">表格配置</el-dropdown-item>
                  <el-dropdown-item command="json">JSON</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
          <PropertyGrid
            :data="properties"
            @remove="onRemoveProperty"
            @edit="onEditProperty"
            @update="onUpdateProperty"
            v-loading="deletePropertyFetch.isFetching.value"
          />
        </CardTitle>
      </el-col>
    </el-row>
    <ModelEditDialog ref="modelEditRef" @save="onSaveModel" />
    <PropertyEditDialog ref="propertyEditRef" @save="onSaveProperty" />
    <JsonPreview ref="jsonPreviewRef" />
  </page-view>
</template>
<script setup lang="ts">
  import _ from 'lodash';
  import modelApi, { Model, ModelProperty } from '/@/api/tools/model';
  import { DictionarNameEnum } from '/@/enums/dictionarNameEnum';
  import { useHttpFetch } from '/@/hooks/fetch';
  import ModelTree from './components/ModelTree.vue';
  import PropertyGrid from './components/PropertyGrid.vue';
  import ModelEditDialog from './components/ModelEditDialog.vue';
  import PropertyEditDialog from './components/PropertyEditDialog.vue';
  import JsonPreview from './components/JsonPreview.vue';
  import {
    JsonPreviewInstance,
    ModelEditInstance,
    ModelTreeInstance,
    PropertyEditInstance
  } from './types';
  import { log } from '/@/utils/log';
  import { generateJson } from '../helps';

  const getModelFetch = useHttpFetch(modelApi.getAllModels, null, {
    immediate: true
  });
  const getPropertyFetch = useHttpFetch(modelApi.getModelProperties);
  const deletePropertyFetch = useHttpFetch(modelApi.deleteProperty);
  const savePropertyFetch = useHttpFetch(modelApi.saveProperty);
  const modelEditRef = ref<ModelEditInstance>();
  const propertyEditRef = ref<PropertyEditInstance>();
  const modelTreeRef = ref<ModelTreeInstance>();
  const jsonPreviewRef = ref<JsonPreviewInstance>();
  const properties = computed<ModelProperty[]>({
    get: () => {
      return getPropertyFetch.data.value ?? [];
    },
    set: (value) => {
      getPropertyFetch.data.value = value;
    }
  });
  const selectOrg = ref<string>();
  const currentModel = ref<Model | null>();
  const title = computed(() => {
    if (currentModel.value) {
      return `${currentModel.value.displayName}(${currentModel.value.name}) - 模型属性`;
    }
    return '模型属性';
  });
  const onSelectModel = async (model: Model) => {
    log('select model', model);
    if (currentModel.value?.id == model.id) return;
    currentModel.value = model;
    await getPropertyFetch.execute({ modelId: model.id, objectId: selectOrg.value });
  };
  const onEditModel = (model?: Model) => {
    modelEditRef.value.open(model);
  };
  const onRemoveModel = (model: Model) => {
    const index = getModelFetch.data.value.findIndex((t) => t.id == model.id);
    getModelFetch.data.value.splice(index, 1);
    if (currentModel?.value.id === model.id) {
      properties.value = [];
      currentModel.value = null;
    }
  };
  const onSaveModel = async (model: Model) => {
    const index = getModelFetch.data.value.findIndex((t) => t.id == model.id);
    if (index >= 0) {
      getModelFetch.data.value.splice(index, 1, model);
    } else {
      getModelFetch.data.value.push(model);
    }
    modelTreeRef.value.selectNode({ ...model, isLeaf: true });
    if (model.id == currentModel.value?.id) {
      currentModel.value = model;
      getPropertyFetch.data.value = model.properties ?? [];
    }
    log('save model', model);
  };
  const onRemoveProperty = async (property: ModelProperty) => {
    await deletePropertyFetch.execute(property.id);
    const index = getPropertyFetch.data.value.findIndex((t) => t.id == property.id);
    getPropertyFetch.data.value.splice(index, 1);
  };
  const onEditProperty = (property: ModelProperty) => {
    log('start edit property', property);
    propertyEditRef.value.open(property);
  };
  const onUpdateProperty = async (property: ModelProperty) => {
    await savePropertyFetch.execute(property);
  };
  const onSaveProperty = (property: ModelProperty) => {
    const index = getPropertyFetch.data.value.findIndex((t) => t.id === property.id);
    getPropertyFetch.data.value.splice(index, 1, property);
  };
  const onChangeOrg = async (value) => {
    if (currentModel.value) {
      await getPropertyFetch.execute({ modelId: currentModel.value.id, objectId: value });
    }
  };
  const onClickCommand = (command) => {
    if (command === 'json') {
      const json = generateJson(getPropertyFetch.data.value ?? []);
      const jsonStr = JSON.stringify(json, null, '\t');
      jsonPreviewRef.value.open(jsonStr);
    }
  };
</script>

<style lang="scss" scoped>
  .container {
  }
</style>
