<template>
  <PropertyView
    v-model="root"
    @add="onAdd"
    @remove="onRemove"
    @add-child="onAddChild"
    :root="true"
    :add="true"
    :dropdown="false"
    :disabled="true"
    :unfold="true"
    :close="false"
  />
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import { ModelProperty, ModelField } from '../types';
  import useHandle from '../modelhandle';

  import PropertyView from './FormModelProperty.vue';
  // import { log } from '/@/utils/log';
  interface Props {
    modelValue?: ModelField[];
  }

  const props = defineProps<Props>();
  const emit = defineEmits(['update:modelValue']);
  const { getProperties, data, add, remove } = useHandle(props.modelValue);

  const root = computed({
    get() {
      const root: ModelProperty = {
        id: 'root',
        type: 'object',
        order: 1,
        children: getProperties(props.modelValue)
      };
      return root;
    },
    set() {
      emit('update:modelValue', data.value);
    }
  });

  const onAdd = (property: ModelProperty) => {
    if (property.id == 'root') {
      add();
    } else {
      add(property.order, property.parent);
    }
  };

  const onAddChild = (property: ModelProperty) => {
    add(property.order, property.id);
  };

  const onRemove = (property: ModelProperty) => {
    remove(property.id);
  };

  watch([props], () => {
    data.value = props.modelValue ?? [];
  });
</script>
