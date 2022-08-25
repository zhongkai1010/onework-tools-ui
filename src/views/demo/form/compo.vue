<template>
  <page-view class="container">
    <component-list />
    <el-card shadow="always" class="form-container">
      <template #header>
        <div class="card-header">
          <span>表单</span>
          <el-button type="primary" @click="formConfigDrawerRef.open()">表单配置</el-button>
          <el-button type="primary" @click="log">查看配置</el-button>
        </div>
      </template>
      <el-form
        :model="formConfigValue"
        :label-width="formConfig.labelWidth"
        :label-position="formConfig.labelPosition"
        :size="formConfig.size"
      >
        <draggable
          tag="el-row"
          group="component"
          :list="formItems"
          item-key="id"
          :component-data="{
            gutter: formConfig.gutter,
            align: formConfig.align,
            justify: formConfig.justify,
          }"
        >
          <template #item="{ element }: { element: DraggableItemConfig, index: number }">
            <draggable-item
              :id="element.id"
              :model-value="formConfigValue[element.name]"
              @update:model-value="(value) => (formConfigValue[element.name] = value)"
              @set="(id) => formItemDrawerRef.open(id)"
            />
          </template>
        </draggable>
      </el-form>
    </el-card>
    <form-config-drawer ref="formConfigDrawerRef" />
    <form-item-config-drawer ref="formItemDrawerRef" />
  </page-view>
</template>

<script setup lang="ts">
  import draggable from 'vuedraggable';
  import DraggableItem from './components/DraggableItem.vue';
  import ComponentList from './components/ComponentList.vue';
  import FormConfigDrawer from './components/FormConfigDrawer.vue';
  import FormItemConfigDrawer from './components/FormItemConfigDrawer.vue';
  import { buildUUID } from '/@/utils/uuid';

  import {
    DraggableItemConfig,
    FormConfigDrawerInstance,
    FormConfigType,
    FormItemDrawerInstance,
    FORM_LIST_PROVIDE_KEY,
  } from './types';

  const formConfigDrawerRef = ref<FormConfigDrawerInstance>();
  const formItemDrawerRef = ref<FormItemDrawerInstance>();

  const formConfig = computed<FormConfigType>(() => {
    if (formConfigDrawerRef.value != null) {
      return unref(formConfigDrawerRef.value.config);
    } else {
      return {
        gutter: 20,
        labelWidth: 80,
        labelPosition: 'top',
        size: 'default',
        justify: 'start',
        align: 'middle',
      };
    }
  });
  const formConfigValue = reactive<FormConfigType>({
    gutter: 20,
    labelWidth: 120,
    labelPosition: 'top',
    size: 'default',
    justify: 'start',
    align: 'middle',
  });
  const formItems = ref<DraggableItemConfig[]>([
    {
      id: buildUUID(),
      label: '文本框',
      name: 'default',
      span: 6,
      component: 'input',
    },
  ]);
  const log = () => {
    console.log(formItems.value);
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
