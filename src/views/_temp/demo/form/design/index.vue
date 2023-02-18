<template>
  <page-view class="container" :gutter="0" :bg-color="false">
    <component-list />
    <el-card shadow="always" class="form-container">
      <template #header>
        <div class="header">
          <iconify-icon icon="ant-design:form-outlined" :size="25" />
          <span>表单</span>

          <el-button type="primary" @click="formConfigDrawerRef.open()">配置表单</el-button>
          <el-button @click="onPreview">查看效果</el-button>
          <el-button @click="showConfig">查看配置</el-button>
        </div>
      </template>
      <el-form v-bind="formConfig.props" :model="formValue">
        <draggable
          tag="el-row"
          group="component"
          :list="formConfig.fields"
          item-key="id"
          :component-data="formConfig.layout"
        >
          <template #item="{ element }: { element: DraggableItemConfig, index: number }">
            <draggable-item
              :model-value="formValue[element.name]"
              :config="element"
              @set="onSetItem"
              @copy="onCopyItem"
              @remove="onRemoveItem"
              @update:model-value="(value) => (formValue[element.name] = value)"
            />
          </template>
        </draggable>
      </el-form>
    </el-card>
    <FormConfigDrawer v-model="formConfig" ref="formConfigDrawerRef" />
    <FormItemConfigDrawer ref="formItemDrawerRef" @save="onSaveItem" />
    <PreviewFrom :config="formConfig" ref="previewFromRef" />
  </page-view>
</template>

<script setup lang="ts">
  import draggable from 'vuedraggable';
  import DraggableItem from './components/DraggableItem.vue';
  import ComponentList from './components/ComponentList.vue';
  import FormConfigDrawer from './components/FormConfigDrawer.vue';
  import FormItemConfigDrawer from './components/FormItemConfigDrawer.vue';
  import PreviewFrom from './components/PreviewFrom.vue';
  import {
    DEFAULT_DRAGGABLE_ITEM_CONFIG,
    DraggableFormConfig,
    DraggableItemConfig,
    FormConfigDrawerInstance,
    FormItemDrawerInstance,
    FORM_LIST_PROVIDE_KEY
  } from './types';
  import _ from 'lodash';

  import { log } from '/@/utils/log';
  import { DynamicFormConfig } from '/@/components/DynamicForm';
  import { buildUUID } from '/@/utils/uuid';

  const formValue = reactive({});
  const formConfig = reactive<DraggableFormConfig>({
    name: 'form',
    url: '',
    layout: {
      gutter: 20,
      justify: 'start',
      align: 'top'
    },
    props: {
      labelWidth: 80,
      labelPosition: 'top',
      size: 'default'
    },
    fields: [
      {
        id: 'default',
        ...DEFAULT_DRAGGABLE_ITEM_CONFIG
      }
    ]
  });

  const formConfigDrawerRef = ref<FormConfigDrawerInstance>();
  const formItemDrawerRef = ref<FormItemDrawerInstance>();
  const previewFromRef = ref<{ open: (config: DynamicFormConfig) => void }>();

  const onSaveItem = (value: DraggableItemConfig) => {
    const index = formConfig.fields.findIndex((t) => t.id == value.id);
    formConfig.fields.splice(index, 1, value);
  };

  const onSetItem = (id) => {
    const config = formConfig.fields.find((t) => t.id == id);
    if (config) {
      formItemDrawerRef.value.open(_.cloneDeep(config));
    } else {
      throw new Error(`not fond item by id ${id}`);
    }
  };

  const onCopyItem = (id: string) => {
    const index = formConfig.fields.findIndex((t) => t.id == id);
    const copyItem = _.cloneDeep(formConfig.fields[index]);
    copyItem.id = buildUUID();
    copyItem.name = buildUUID();
    formConfig.fields.push({ ...copyItem });
  };

  const onRemoveItem = (id: string) => {
    const index = formConfig.fields.findIndex((t) => t.id == id);
    formConfig.fields.splice(index, 1);
  };

  const onPreview = () => {
    previewFromRef.value.open(formConfig);
  };

  const showConfig = () => {
    log('dynamic form config', formConfig);
  };

  provide(FORM_LIST_PROVIDE_KEY, formConfig.fields);
</script>

<style lang="scss" scoped>
  .container {
    display: flex;

    .form-container {
      width: calc(100vw - $layout-sidebar-width);
      min-height: $main-no-margin-height;
      margin-left: 300px;
      user-select: none;
      :deep(.el-card__body) {
        padding: 0px;
      }
      .el-row {
        padding: 10px;
        margin: 0 !important;
        min-height: calc($main-no-margin-height - 80px);
        align-content: flex-start;
      }
      .header {
        display: flex;
        align-items: center;
        i {
          margin-right: 5px;
        }
        span {
          margin-right: auto;
        }
      }
    }
  }
</style>

<style lang="scss">
  .el-drawer__body {
    padding: 0px 20px;
    @include scrollBar;
  }
</style>
