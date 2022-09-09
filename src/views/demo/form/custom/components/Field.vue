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
  import { Field, Property } from '../types';
  import useHandle from '../handle';

  import _ from 'lodash';
  import PropertyView from './Property.vue';

  interface Props {
    modelValue: Field[];
  }

  const props = defineProps<Props>();
  const emit = defineEmits(['update:modelValue']);

  const { getProperties, fields, add, remove } = useHandle(props.modelValue);

  const root = computed({
    get() {
      const data: Property = {
        uid: 'root',
        type: 'object',
        children: getProperties(fields.value)
      };
      data.children = getProperties(fields.value);
      return data;
    },
    set() {
      emit('update:modelValue', fields.value);
    }
  });

  const onAdd = (property: Property) => {
    if (property.uid == 'root') {
      add();
    } else {
      add(property.order, property.parent);
    }
  };

  const onAddChild = (property: Property) => {
    add(property.order, property.uid);
  };

  const onRemove = (property: Property) => {
    remove(property.uid);
  };

  watch([fields.value], () => {
    emit('update:modelValue', fields.value);
  });
</script>
