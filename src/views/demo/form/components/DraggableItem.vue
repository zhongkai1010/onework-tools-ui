<template>
  <el-col :span="props.span" class="item-container">
    <el-form-item
      :label="props.label"
      :prop="props.name"
      :required="props.required"
      :rules="props.rules"
    >
      <form-item
        :props="props.props"
        :component="props.component"
        :model-value="props.modelValue"
        @update:model-value="(value) => $emit('update:modelValue', value)"
      />
    </el-form-item>
    <div class="tool">
      <iconify-icon icon="ant-design:setting-outlined" @click="emits('setting', props)" />
      <iconify-icon icon="ant-design:copy-outlined" @click="emits('copy', props)" />
      <iconify-icon icon="ant-design:delete-outlined" @click="emits('remove', props)" />
    </div>
  </el-col>
</template>

<script setup lang="ts">
  import { FormItemRule } from 'element-plus';
  import { DraggableItemProps } from '../types';
  import { FormComponent, FormItemOption } from '/@/components/FormItem';

  const props = defineProps<{
    modelValue: any;

    id: string;
    label: string;
    name: string;
    span?: number;
    required?: boolean;
    rules?: FormItemRule;
    component: FormComponent;
    props?: Recordable<any> & {
      options: FormItemOption[];
    };
  }>();

  const emits = defineEmits<{
    (e: 'update:modelValue', value: any);
    (e: 'setting', value: DraggableItemProps);
    (e: 'copy', value: DraggableItemProps);
    (e: 'remove', value: DraggableItemProps);
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
