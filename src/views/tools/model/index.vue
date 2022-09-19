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
                <iconify-icon
                  icon="ant-design:appstore-add-outlined"
                  @click="onClickAddModel"
                  :size="18"
                />
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
              <iconify-icon icon="carbon:property-relationship" />
              <span>{{ title }}</span>
              <div class="button">
                <el-select style="margin-right: 5px" placeholder="请选择组织" clearable>
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
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
  </page-view>
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import modelApi, { Model, ModelProperty } from '/@/api/tools/model';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useHttpFetch } from '/@/hooks/fetch';
  import { ModelEditInstance, PropertyEditInstance } from './types';
  import { log } from '/@/utils/log';
  import ModelView from './components/Model.vue';
  import PropertyView from './components/Property.vue';
  import ModelEdit from './components/ModelEdit.vue';
  import PropertyEdit from './components/PropertyEdit.vue';
  const options = [
    {
      value: 'Option1',
      label: 'Option1'
    },
    {
      value: 'Option2',
      label: 'Option2'
    },
    {
      value: 'Option3',
      label: 'Option3'
    },
    {
      value: 'Option4',
      label: 'Option4'
    },
    {
      value: 'Option5',
      label: 'Option5'
    }
  ];
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
          display: flex;
          cursor: pointer;
          margin-left: auto;
        }
      }
    }
    :deep(.el-card__body) {
      min-height: calc($main-no-margin-height - 70px);
    }
  }
</style>
