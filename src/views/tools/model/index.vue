<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-13 09:34:46
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-19 17:36:23
 * @FilePath: \onework-tools-ui\src\views\tools\model\index.vue
 * @Description:
-->
<template>
  <page-view class="container" :gutter="0" :bgColor="false" v-loading="getFetch.isFetching.value">
    <el-row :gutter="20">
      <el-col :span="4">
        <CardTitle title="数据模型" icon="carbon:model-alt">
          <template #button>
            <el-button type="primary" @click="omEditModel()">创建</el-button>
          </template>
          <ModelTree
            @select="onSelectModel"
            @edit="(value) => omEditModel(value)"
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
            <el-dropdown>
              <el-button type="primary"> 生成代码 </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>表单配置</el-dropdown-item>
                  <el-dropdown-item>表格配置</el-dropdown-item>
                  <el-dropdown-item>JSON</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
          <PropertyGrid :data="properties" />
        </CardTitle>
      </el-col>
    </el-row>
    <ModelEditDialog ref="modelEditRef" />
  </page-view>
</template>
<script setup lang="ts">
  import _ from 'lodash';
  import modelApi, { Model, ModelProperty } from '/@/api/tools/model';
  import { DictionarNameEnum } from '/@/enums/dictionarNameEnum';
  import { useHttpFetch } from '/@/hooks/fetch';
  import { log } from '/@/utils/log';
  import ModelTree from './components/ModelTree.vue';
  import PropertyGrid from './components/PropertyGrid.vue';
  import ModelEditDialog from './components/ModelEditDialog.vue';
  import { ModelEditInstance } from './types';

  const getFetch = useHttpFetch<any, ModelProperty[]>(modelApi.getModelProperties);

  const modelEditRef = ref<ModelEditInstance>();
  const properties = computed<ModelProperty[]>({
    get: () => {
      return getFetch.data.value ?? [];
    },
    set: (value) => {
      getFetch.data.value = value;
    }
  });
  const selectOrg = ref<string>();
  const currentModel = ref<Model>();
  const title = computed(() => {
    if (currentModel.value) {
      return `${currentModel.value.displayName}(${currentModel.value.name}) - 模型属性`;
    }
    return '模型属性';
  });
  const onSelectModel = async (model: Model) => {
    log('select model', model);
    currentModel.value = model;
    await getFetch.execute({ modelId: model.id, objectId: selectOrg.value });
  };
  const omEditModel = (model?: Model) => {
    modelEditRef.value.open(model);
  };
  const onRemoveModel = () => {
    properties.value = [];
  };

  const onChangeOrg = async (value) => {
    if (currentModel.value) {
      await getFetch.execute({ modelId: currentModel.value.id, objectId: value });
    }
  };
</script>

<style lang="scss" scoped>
  .container {
  }
</style>
