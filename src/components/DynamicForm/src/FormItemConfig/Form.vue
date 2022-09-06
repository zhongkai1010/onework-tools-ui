<template>
  <el-form :model="modelValue" :label-width="120" label-position="left">
    <Basic v-model="modelValue" />
    <Item v-model="modelValue" />
    <Data v-model="modelValue.component.config" v-if="config.isData" />
    <Rule v-model="modelValue.props.verifies" v-if="config.isRule" />
    <ItemComponent v-model="modelValue.component" />
  </el-form>
</template>

<script setup lang="ts">
  import Basic from './Basic.vue';
  import Item from './Item.vue';
  import Data from './Data.vue';
  import Rule from './Rule.vue';
  import ItemComponent from './Component.vue';

  import { FormComponentConfig, DynamicFormField } from '/@/components/DynamicForm';
  import ComponentData from '/@/components/DynamicForm/component';
  interface Props {
    modelValue: DynamicFormField;
  }

  const props = defineProps<Props>();
  const emit = defineEmits(['update:modelValue']);

  const modelValue = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      emit('update:modelValue', value);
    },
  });

  const config = computed<FormComponentConfig>(
    () => ComponentData[props.modelValue.component.component],
  );
</script>

<style scoped></style>
