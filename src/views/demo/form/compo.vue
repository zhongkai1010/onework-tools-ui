<template>
  <page-view class="container">
    <component-list />
    <el-card shadow="always" class="form-container">
      <template #header>
        <div class="card-header">
          <span>表单</span>
          <el-button type="primary" @click="formConfigDrawerRef.open()">表单配置</el-button>
        </div>
      </template>
      <el-form
        :model="formValue"
        :label-width="formConfig.labelWidth"
        :label-position="formConfig.labelPosition"
        :size="formConfig.size"
      >
        <draggable
          tag="el-row"
          group="component"
          :list="formItems"
          item-key="id"
          @change="log"
          :component-data="{
            gutter: formConfig.gutter,
            align: formConfig.align,
            justify: formConfig.justify,
          }"
        >
          <template #item="{ element, index }: { element: DraggableItemProps, index: number }">
            <draggable-item
              v-bind="element"
              :index="index"
              :model-value="formValue[element.name]"
              @setting="onItemSetting"
              @copy="onItemCopy"
              @remove="onItemRemove"
            />
          </template>
        </draggable>
      </el-form>
    </el-card>
    <FormConfigDrawer ref="formConfigDrawerRef" />
    <FormItemDrawer ref="formItemDrawerRef" @save="onSaveItemConfig" />
  </page-view>
</template>

<script setup lang="ts">
  import draggable from 'vuedraggable';
  import DraggableItem from './components/DraggableItem.vue';
  import ComponentList from './components/ComponentList.vue';
  import FormConfigDrawer from './components/FormConfigDrawer.vue';
  import FormItemDrawer from './components/FormItemDrawer.vue';
  import { buildUUID } from '/@/utils/uuid';
  import { ConfigFormItemProps } from '/@/components/ConfigForm';
  import {
    DraggableItemProps,
    FormConfigDrawerInstance,
    FormConfigType,
    FormItemDrawerInstance,
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
  const formValue = reactive({});
  const formItems = ref<DraggableItemProps[]>([
    {
      id: buildUUID(),
      label: '文本框',
      name: buildUUID(),
      span: 6,
      component: 'input',
    },
  ]);
  const currentItem = ref();
  const log = (_evt) => {
    // console.log('-----------change log-------------', evt);
    // console.log('-----------change formItems-------', formItems.value);
  };

  const onItemSetting = (item: ConfigFormItemProps) => {
    console.log('---------------onItemSetting-----------------', item);
    currentItem.value = item;
    if (formItemDrawerRef.value) {
      formItemDrawerRef.value.open(currentItem.value);
    }
  };

  const onItemCopy = (value: DraggableItemProps) => {
    const newItem = { ...value, id: buildUUID(), name: buildUUID() };
    const newFormItems = unref(formItems);
    newFormItems.push(newItem);
    formItems.value = newFormItems;
    console.log('---------------onItemCopy-----------------', newFormItems);
  };
  const onItemRemove = (value: DraggableItemProps) => {
    const newFormItems = unref(formItems);
    const index = newFormItems.findIndex((t) => t.id == value.id);
    newFormItems.splice(index, 1);
    formItems.value = newFormItems;
  };
  const onSaveItemConfig = (value: DraggableItemProps) => {
    console.log('---------------onSaveItemConfig-----------------', value);
    // const newFormItems = unref(formItems);
    // const index = newFormItems.findIndex((t) => t.id == value.id);
    // newFormItems.splice(index, 1, value);
    // formItems.value = newFormItems;
  };
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    background-color: transparent !important;

    .form-container {
      width: calc(100vw - $layout-sidebar-width - 280px);
      min-height: $main-no-margin-height;
      margin-left: 300px;
      user-select: none;
      .card-header {
        display: flex;
        align-items: center;
        span {
          margin-right: auto;
        }
      }

      &:deep(.el-form-item__content) {
        div:first-child {
          width: 100%;
        }
      }
    }
  }
</style>

<style lang="scss">
  .el-drawer__header {
    margin-bottom: 0px;
  }
</style>
