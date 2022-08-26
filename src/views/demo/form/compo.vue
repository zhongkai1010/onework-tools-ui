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
              :model-value="formConfigValue[element.name]"
              :config="element"
              @set="onSetItem"
              @update:model-value="(value) => (formConfigValue[element.name] = value)"
            />
          </template>
        </draggable>
      </el-form>
    </el-card>
    <form-config-form-drawer ref="formConfigDrawerRef" />
    <item-config-form-drawer ref="formItemDrawerRef" :config="currentItem" @save="onSaveItem" />
  </page-view>
</template>

<script setup lang="ts">
  import draggable from 'vuedraggable';
  import DraggableItem from './components/DraggableItem.vue';
  import ComponentList from './components/ComponentList.vue';
  import FormConfigFormDrawer from './components/FormConfigFormDrawer.vue';
  import ItemConfigFormDrawer from './components/FormConfigFormDrawer/index.vue';

  import {
    DraggableItemConfig,
    FormConfigDrawerInstance,
    FormConfigType,
    FormItemDrawerInstance,
    DEFAULT_DRAGGABLE_ITEM_CONFIG,
    FORM_LIST_PROVIDE_KEY,
  } from './types';
  import _ from 'lodash';

  const formConfigDrawerRef = ref<FormConfigDrawerInstance>();
  const formItemDrawerRef = ref<FormItemDrawerInstance>();
  const currentItem = ref<DraggableItemConfig | undefined>();

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
  const formConfigValue = reactive({
    name: 'test',
  });

  const formItems = ref<DraggableItemConfig[]>([DEFAULT_DRAGGABLE_ITEM_CONFIG]);

  const onSetItem = (id) => {
    const config = toRaw(formItems.value).find((t) => t.id == id);
    if (config) {
      currentItem.value = { ...config };
      formItemDrawerRef.value.open();
    } else {
      throw new Error(`not fond item by id ${id}`);
    }
  };
  const onSaveItem = (value: DraggableItemConfig) => {
    const index = formItems.value.findIndex((t) => t.id == value.id);
    formItems.value.splice(index, 1, value);
  };
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
