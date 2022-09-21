<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-14 16:41:47
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-21 15:34:17
 * @FilePath: \onework-tools-ui\src\components\Form\src\FormModel.vue
 * @Description:
-->
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
        parent: null,
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
