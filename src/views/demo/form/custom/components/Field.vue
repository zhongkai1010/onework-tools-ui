<template>
  <PropertyView v-model="root" @add="onAdd" @remove="onRemove" @add-child="onAddChild" />
</template>

<script setup lang="ts">
  import { Field, Property } from '../types';
  import useHandle from '../handle';
  import { log } from '/@/utils/log';
  import _ from 'lodash';
  import PropertyView from './Property.vue';

  interface Props {
    modelValue: Field[];
  }

  const props = defineProps<Props>();
  const emit = defineEmits(['update:modelValue']);

  const root = reactive<Property>({
    uid: 'root',
    name: '',
    displayName: '',
    type: 'object',
    required: false,
    children: [],
    disabled: true,
    root: true
  });

  const { getProperties, fields, add } = useHandle(props.modelValue);

  const root = computed({
    get() {
      const data = _.cloneDeep(rootProperty);
      data.children = getProperties(fields.value);
      return data;
    },
    set() {
      emit('update:modelValue', fields.value);
    }
  });

  const onAdd = (property: Property) => {
    log('add', property);
    if (property.root) {
      add();
    } else {
      add(property.order);
    }
  };

  const onAddChild = (property: Property) => {
    log('add', property);
  };

  const onRemove = () => {};
</script>
