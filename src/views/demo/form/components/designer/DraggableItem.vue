<template>
  <el-col :span="props.config.span" class="item-container">
    <el-form-item v-bind="props.config.props">
      <form-item
        :component="props.config.component.component"
        :props="props.config.component.props"
        :model-value="props.modelValue"
        :config="props.config.component.config"
        @update:model-value="(value) => $emit('update:modelValue', value)"
      />
    </el-form-item>
    <div class="tool">
      <iconify-icon icon="ant-design:setting-outlined" @click="emits('set', props.config.id)" />
      <iconify-icon icon="ant-design:copy-outlined" @click="emits('copy', props.config.id)" />
      <iconify-icon icon="ant-design:delete-outlined" @click="emits('remove', props.config.id)" />
    </div>
  </el-col>
</template>

<script setup lang="ts">
  import _ from 'lodash';

  import { DraggableItemConfig } from '/@/views/demo/form/types';
  import { log } from '/@/utils/log';
  const props = defineProps<{
    modelValue: any;
    config: DraggableItemConfig;
  }>();
  log('draggable form item props', props.config);
  const emits = defineEmits<{
    (e: 'set', id: string);
    (e: 'copy', id: string);
    (e: 'remove', id: string);
    (e: 'update:modelValue', value: any);
  }>();
</script>

<style lang="scss" scoped>
  .item-container {
    position: relative;
    .tool {
      display: none;
      position: absolute;
      top: 0px;
      right: 0px;
      i {
        margin: 0 5px;
        cursor: pointer;
      }
    }

    &:hover {
      .tool {
        display: block;
      }
      border: 1px dashed var(--header-font-color);
    }
  }
</style>
