<template>
  <page-view class="container" :gutter="0" :bgColor="false">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-card>
          <template #header>
            <div class="header">
              <iconify-icon icon="carbon:model-alt" />
              <span>数据模型</span>
              <div class="button">
                <el-button type="primary" @click="onClickAddModel">创建</el-button>
              </div>
            </div>
          </template>
          <ModelView
            :data="models"
            v-loading="getModelFetch.isFetching.value || deleteModelFetch.isFetching.value"
            @select="onSelectModel"
            @edit="onClickEditModel"
            @remove="onClickRemoveModel"
          />
        </el-card>
      </el-col>
      <el-col :span="20">
        <el-card>
          <template #header>
            <div class="header">
              <iconify-icon icon="ant-design:unordered-list-outlined" />
              <span>{{ title }}</span>
              <div class="button">
                <el-button type="primary">表单配置</el-button>
              </div>
            </div>
          </template>
          <PropertyView
            :data="currentModel.properties"
            @edit="onClickEditProperty"
            @update="onChangeProperty"
            @remove="onClickRemovetProperty"
          />
        </el-card>
      </el-col>
    </el-row>
    <ModelEdit ref="modelEditRef" @save="onSaveModel" />
    <PropertyEdit ref="propertyEditRef" @save="onSaveProperty" />
    <FormDesign />
  </page-view>
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import modelApi, { Model, ModelProperty } from '/@/api/tool/model';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useHttpFetch } from '/@/hooks/fetch';
  import { ModelEditInstance, PropertyEditInstance } from './types';
  import { log } from '/@/utils/log';
  import ModelView from './components/Model.vue';
  import PropertyView from './components/Property.vue';
  import ModelEdit from './components/ModelEdit.vue';
  import PropertyEdit from './components/PropertyEdit.vue';
  import FormDesign from './components/FormDesign.vue';

  const { message } = useMessage();
  const getModelFetch = useHttpFetch<any, Model[]>(modelApi.getAllModel, null, {
    immediate: true
  });
  const deleteModelFetch = useHttpFetch<any, Model[]>(modelApi.deleteModel);
  // const savePropertyFetch = useHttpFetch<any, Model[]>(modelApi.saveProperty);
  const modelEditRef = ref<ModelEditInstance>();
  const propertyEditRef = ref<PropertyEditInstance>();
  const currentModel = ref<Model>({
    id: 'root',
    name: '',
    displayName: '',
    properties: []
  });
  const models = computed({
    get: () => {
      return getModelFetch.data.value ?? [];
    },
    set: (value) => {
      getModelFetch.data.value = value;
    }
  });
  const title = computed(() => {
    if (currentModel.value.displayName.length > 0) {
      return `${currentModel.value.displayName}(${currentModel.value.name}) - 模型属性`;
    }
    return '模型属性';
  });
  const onSelectModel = (model: Model) => (currentModel.value = model);
  const onClickAddModel = () => modelEditRef.value.open();
  const onClickEditModel = (value) => modelEditRef.value.open(value);
  const onClickRemoveModel = (value: Model) => {
    deleteModelFetch
      .execute(value.id)
      .then(() => {
        const index = models.value.findIndex((t) => t.id == value.id);
        models.value.splice(index, 1);
        // 重置显示表格和标题
        currentModel.value = {
          id: 'root',
          name: '',
          displayName: '',
          properties: []
        };
      })
      .catch((error) => {
        message('删除数据模型失败！', 'error');
        log('remove model error', error);
      });
  };
  const onSaveModel = (value: Model) => {
    const index = getModelFetch.data.value.findIndex((t) => t.id === value.id);
    if (index > 0) {
      models.value.splice(index, 1, value);
    } else {
      models.value.push(value);
    }
    currentModel.value = value;
  };
  const onClickEditProperty = (value: ModelProperty) => {
    log('edit property', value);
    propertyEditRef.value.open(value);
  };
  const onChangeProperty = () => {};
  const onClickRemovetProperty = (value: ModelProperty) => {
    log('edit property', value);
  };
  const onSaveProperty = () => {};
</script>

<style lang="scss" scoped>
  .container {
    .el-card__header {
      .header {
        display: flex;
        align-items: center;
        height: 25px;
        i {
          font-size: 14px;
          margin-right: 5px;
        }
        .button {
          margin-left: auto;
        }
      }
    }
    :deep(.el-card__body) {
      min-height: calc($main-no-margin-height - 70px);
    }
  }
</style>
