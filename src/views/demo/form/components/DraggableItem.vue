<template>
  <el-col :span="formProps.span" class="item-container">
    <el-form-item
      :label="formProps.label"
      :prop="formProps.name"
      :required="formProps.required"
      :rules="formProps.formRules"
      :label-width="formProps.labelWidth"
    >
      <form-item
        :props="formProps.props"
        :component="formProps.component"
        :model-value="props.modelValue"
        @update:model-value="(value) => $emit('update:modelValue', value)"
      />
    </el-form-item>
    <div class="tool">
      <iconify-icon icon="ant-design:setting-outlined" @click="emits('set', props.id)" />
      <iconify-icon icon="ant-design:copy-outlined" @click="onCopy" />
      <iconify-icon icon="ant-design:delete-outlined" @click="onRemove" />
    </div>
  </el-col>
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import { Ref } from 'vue';
  import { DraggableItemProps } from '../types';
  import { buildUUID } from '/@/utils/uuid';

  const props = defineProps<{
    modelValue: any;
    id: string;
  }>();
  const emits = defineEmits<{
    (e: 'set', value: string);
  }>();

  const formItems = inject<Ref<DraggableItemProps[]>>('formItems');
  const formProps = computed(() => {
    return formItems.value.find((t) => t.id == props.id);
  });

  // const formItemWidth = computed(() => {
  //   const width = formProps.value.width;
  //   if (!width) return 'auto';
  //   if (typeof width == 'number') {
  //     return `${width}px`;
  //   } else {
  //     return width;
  //   }
  // });

  const onCopy = () => {
    const newItem: DraggableItemProps = _.defaultsDeep({}, formProps.value);
    newItem.id = buildUUID();
    newItem.name = buildUUID();
    formItems.value.push(newItem);
  };

  const onRemove = () => {
    const index = formItems.value.findIndex((t) => t.id == props.id);
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
