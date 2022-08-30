<template>
  <page-view class="container">
    <component-list />
    <el-card shadow="always" class="form-container">
      <template #header>
        <div class="card-header">
          <span>表单</span>
          <el-button type="primary" @click="formConfigDrawerRef.open()">表单配置</el-button>
          <el-button type="primary" @click="log('form-item', formItems)">查看配置</el-button>
        </div>
      </template>
      <el-form v-bind="formConfig.props" :model="formValue">
        <draggable
          tag="el-row"
          group="component"
          :list="formItems"
          item-key="id"
          :component-data="formConfig.layout"
        >
          <template #item="{ element }: { element: DraggableItemConfig, index: number }">
            <draggable-item
              :model-value="formValue[element.name]"
              :config="element"
              @set="onSetItem"
              @update:model-value="(value) => (formValue[element.name] = value)"
            />
          </template>
        </draggable>
      </el-form>
    </el-card>
    <FormConfigDrawer :config="formConfig" ref="formConfigDrawerRef" />
    <FormItemConfigDrawer ref="formItemDrawerRef" @save="onSaveItem" />
  </page-view>
</template>

<script setup lang="ts">
  import draggable from 'vuedraggable';
  import DraggableItem from './components/designer/DraggableItem.vue';
  import ComponentList from './components/designer/ComponentList.vue';
  import FormConfigDrawer from './components/designer/FormConfigDrawer.vue';
  import FormItemConfigDrawer from './components/designer/FormItemConfigDrawer.vue';

  import {
    DEFAULT_DRAGGABLE_ITEM_CONFIG,
    DraggableItemConfig,
    FormConfigDrawerInstance,
    FormConfigDrawerProps,
    FormItemDrawerInstance,
    FORM_LIST_PROVIDE_KEY,
  } from './types';
  import _ from 'lodash';

  import { log } from '/@/utils/log';

  const formValue = reactive({});
  const formConfig = reactive<FormConfigDrawerProps>({
    layout: {
      gutter: 20,
      justify: 'start',
      align: 'middle',
    },
    props: {
      labelWidth: 80,
      labelPosition: 'top',
      size: 'default',
    },
  });

  const formConfigDrawerRef = ref<FormConfigDrawerInstance>();
  const formItemDrawerRef = ref<FormItemDrawerInstance>();

  const formItems = ref<DraggableItemConfig[]>([
    {
      id: 'default',
      ...DEFAULT_DRAGGABLE_ITEM_CONFIG,
    },
  ]);

  const onSetItem = (id) => {
    const config = formItems.value.find((t) => t.id == id);
    if (config) {
      log('onSetItem', config);
      formItemDrawerRef.value.open(config);
    } else {
      throw new Error(`not fond item by id ${id}`);
    }
  };
  const onSaveItem = (value: DraggableItemConfig) => {
    const index = formItems.value.findIndex((t) => t.id == value.id);
    formItems.value.splice(index, 1, value);
  };

  provide(FORM_LIST_PROVIDE_KEY, formItems);
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    background-color: transparent !important;

    .form-container {
      width: calc(100vw - $layout-sidebar-width);
      min-height: $main-no-margin-height;
      margin-left: 300px;
      user-select: none;

      .el-row {
        border: 1px dashed var(--header-font-color);
      }
      .card-header {
        display: flex;
        align-items: center;
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
