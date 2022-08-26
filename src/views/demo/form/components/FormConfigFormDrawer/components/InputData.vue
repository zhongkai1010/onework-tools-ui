<template>
  <el-button-group v-if="formValue.dataType === 'all'">
    <el-button :type="remote ? 'default' : 'primary'" @click="remote = false">静态数据</el-button>
    <el-button :type="remote ? 'primary' : 'default'" @click="remote = true">动态数据</el-button>
  </el-button-group>
  <InputOption :model-value="formValue.props?.options" v-if="!remote" />
  <InputRemote :model-value="formValue.props?.remote" v-if="remote" />
</template>

<script setup lang="ts">
  import InputOption from './InputOption.vue';
  import InputRemote from './InputRemote.vue';
  import { DraggableItemConfig } from '/@/views/demo/form/types';
  const remote = ref(false); // true：动态数据 false ：静态数据
  const props = defineProps<{
    modelValue: DraggableItemConfig;
  }>();
  const formValue = reactive(props.modelValue);

  const initProps = () => {
    if (!formValue.props) {
      formValue.props = {};
    } else {
      if (!formValue.props.options) {
        formValue.props.options = [];
      }
      if (!formValue.props.remote) {
        formValue.props.remote = {
          url: '',
          method: 'get',
          labelKey: 'label',
          valueKey: 'value',
          childerKey: 'children',
        };
      }
    }
  };

  initProps();
</script>

<style scoped></style>
