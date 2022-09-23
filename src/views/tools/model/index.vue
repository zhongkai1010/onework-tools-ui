<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-13 09:34:46
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-23 16:48:31
 * @FilePath: \onework-tools-ui\src\views\tools\model\index.vue
 * @Description:
-->
<template>
  <page-view class="container" :gutter="0" :bgColor="false">
    <el-row :gutter="20">
      <el-col :span="4">
        <CardTitle title="数据模型" icon="carbon:model-alt">
          <template #button>
            <el-button type="primary" @click="modelEditRef.open()">创建</el-button>
          </template>
          <ModelTree
            ref="modelTreeRef"
            v-loading="modelHook.isFetching.value"
            :data="modelHook.data.value ?? []"
            @select="(model) => modelHook.setCurrentModel(model)"
            @edit="(model) => modelEditRef.open(model)"
            @remove="(model) => modelHook.removeModel(model)"
          />
        </CardTitle>
      </el-col>
      <el-col :span="20">
        <CardTitle :title="title" icon="carbon:property-relationship">
          <template #button>
            <FormSelectDictionary
              :name="DictionarNameEnum.ORGANIZATION"
              v-model="modelHook.selectOrg.value"
              style="margin-right: 5px"
              placeholder="请选择组织"
              clearable
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
            :data="modelHook.properties.value"
            @remove="onRemoveProperty"
            @edit="(property) => propertyEditRef.open(modelHook.currentModel.value, property)"
            @update="onUpdateProperty"
            v-loading="deletePropertyFetch.isFetching.value"
          />
        </CardTitle>
      </el-col>
    </el-row>
    <ModelEditDialog ref="modelEditRef" @save="onSaveModel" />
    <PropertyEditDialog ref="propertyEditRef" @save="modelHook.saveProperty" />
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
  import useModel from './useModel';

  const modelHook = useModel();

  const deletePropertyFetch = useHttpFetch(modelApi.deleteProperty);
  const savePropertyFetch = useHttpFetch(modelApi.saveProperty);
  const modelEditRef = ref<ModelEditInstance>();
  const propertyEditRef = ref<PropertyEditInstance>();
  const modelTreeRef = ref<ModelTreeInstance>();
  const jsonPreviewRef = ref<JsonPreviewInstance>();

  const title = computed(() => {
    if (modelHook.currentModel.value) {
      return `${modelHook.currentModel.value.displayName}(${modelHook.currentModel.value.name}) - 模型属性`;
    }
    return '模型属性';
  });

  const onSaveModel = async (model: Model) => {
    modelHook.saveModel(model);
    modelTreeRef.value.selectNode({ ...model, isLeaf: true });
    log('save model', model);
  };

  const onUpdateProperty = async (property: ModelProperty) => {
    await savePropertyFetch.execute({
      modelId: modelHook.currentModel.value.id,
      data: property
    });
    modelHook.saveProperty(property);
  };

  const onClickCommand = (command) => {
    if (command === 'json') {
      const json = generateJson(modelHook.properties.value);
      const jsonStr = JSON.stringify(json, null, '\t');
      jsonPreviewRef.value.open(jsonStr);
    }
  };
  const onRemoveProperty = async (property: ModelProperty) => {
    await deletePropertyFetch.execute({
      modelId: modelHook.currentModel.value.id,
      name: property.name
    });
    modelHook.removeProperty(property);
  };
</script>

<style lang="scss" scoped>
  .container {
  }
</style>
