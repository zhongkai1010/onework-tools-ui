<template>
  <el-button-group v-if="dataMode == 'all'">
    <el-button :type="remote ? 'default' : 'primary'" @click="remote = false">静态数据</el-button>
    <el-button :type="remote ? 'primary' : 'default'" @click="remote = true">动态数据</el-button>
  </el-button-group>
  <InputOption
    :model-value="options"
    v-if="(!remote && dataMode == 'all') || dataMode == 'static'"
  />
  <InputRemote
    :model-value="props.modelValue.component.config"
    v-if="(remote && dataMode == 'all') || dataMode == 'dynamic'"
  />
</template>

<script setup lang="ts">
  import InputOption from './InputOption.vue';
  import InputRemote from './InputRemote.vue';
  import { FormItemOption } from '/@/components/FormItem';

  const props = defineProps<{
    dataMode?: 'all' | 'static' | 'dynamic' | 'none';
    remote?: boolean;
    options?: FormItemOption[];
    remoteConfig?: {
      url: string;
      method: 'post' | 'get';
      params?: Recordable<any>;
    };
    bindConfig?: {
      labelKey: string;
      valueKey: string;
      childerKey?: string;
      searchKey?: string;
    };
  }>();
  const dataMode = ref<'all' | 'static' | 'dynamic' | 'none'>(props.dataMode ?? 'all');
  const remote = ref(props.remote ?? false); // true：动态数据 false ：静态数据
  const options = ref(props.options ?? []);
  const remoteConfig = reactive({});
</script>

<style scoped></style>
