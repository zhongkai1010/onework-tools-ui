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
      <iconify-icon icon="ant-design:copy-outlined" @click="onCopy" />
      <iconify-icon icon="ant-design:delete-outlined" @click="onRemove" />
    </div>
  </el-col>
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import { Ref } from 'vue';
  import { DraggableItemConfig } from '/@/views/demo/form/types';
  import { buildUUID } from '/@/utils/uuid';

  const props = defineProps<{
    modelValue: any;
    config: DraggableItemConfig;
  }>();
  const emits = defineEmits<{
    (e: 'set', value: string);
    (e: 'update:modelValue', value: any);
  }>();

  const formItems = inject<Ref<DraggableItemConfig[]>>('formItems');

  const onCopy = () => {
    const newItem: DraggableItemConfig = _.defaults({}, props.config);
    newItem.id = buildUUID();
    newItem.name = buildUUID();
    formItems.value.push(newItem);
  };

  const onRemove = () => {
    const index = formItems.value.findIndex((t) => t.id == props.config.id);
    formItems.value.splice(index, 1);
  };
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
