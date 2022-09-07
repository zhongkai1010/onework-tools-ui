<template>
  <div class="container">
    <el-divider content-position="left">组件配置</el-divider>
    <el-form-item label="组件类型" prop="component.component">
      <form-type-select v-model="modelValue.component" />
    </el-form-item>
    <el-form-item
      v-for="item in componentProps"
      :key="item.key"
      :label="item.label"
      :prop="`component.props.${item.key}`"
    >
      <form-item
        :model-value="modelValue.props[item.key]"
        :component="typeof item.component === 'string' ? item.component : item.component.component"
        :config="typeof item.component === 'string' ? [] : item.component.config"
        :props="typeof item.component === 'string' ? [] : item.component.props"
        @update:model-value="(val) => (modelValue.props[item.key] = val)"
      />
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
  import _ from 'lodash';

  import { FormComponentProps, FormItemConfig } from '/@/components/DynamicForm';
  import ComponentData from '/@/components/DynamicForm/component';

  interface Props {
    modelValue: FormItemConfig;
  }

  const props = defineProps<Props>();
  const emit = defineEmits(['update:modelValue']);
  const modelValue = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      emit('update:modelValue', value);
    }
  });

  const componentProps = computed<FormComponentProps[]>(() => {
    return ComponentData[props.modelValue.component].props ?? [];
  });
</script>

<style scoped lang="scss">
  .container {
  }
</style>
