<template>
  <el-button-group v-if="props.modelValue.dataType == 'all'">
    <el-button :type="remote ? 'default' : 'primary'" @click="remote = false">静态数据</el-button>
    <el-button :type="remote ? 'primary' : 'default'" @click="remote = true">动态数据</el-button>
  </el-button-group>
  <InputOption
    :model-value="props.modelValue.props?.options"
    v-if="(!remote && props.modelValue.dataType == 'all') || props.modelValue.dataType == 'static'"
  />
  <InputRemote
    :model-value="props.modelValue.props.remote"
    v-if="(remote && props.modelValue.dataType == 'all') || props.modelValue.dataType == 'dynamic'"
  />
</template>

<script setup lang="ts">
  import InputOption from './InputOption.vue';
  import InputRemote from './InputRemote.vue';
  import { DraggableItemConfig } from '/@/views/demo/form/types';
  const remote = ref(false); // true：动态数据 false ：静态数据
  const props = defineProps<{
    modelValue: DraggableItemConfig;
  }>();
</script>

<style scoped></style>
