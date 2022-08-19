<template>
  <IconifyIcon icon="line-md:loading-twotone-loop" :size="32" v-if="loading" class="icon" />
  <el-cascader
    v-if="!loading"
    :model-value="props.modelValue"
    :options="options"
    @update:model-value="(value) => $emit('update:modelValue', value)"
    v-bind="props.cascader"
  />
</template>

<script setup lang="ts">
  import { FormItemOption } from '../..';
  import { http } from '/@/plugins/axios';

  const options = ref([]);
  const loading = ref(false);
  const props = defineProps<{
    modelValue: any;
    url: string;
    urlParams?: any;
    cascader?: any;
  }>();

  watchEffect(async () => {
    loading.value = true;
    http
      .get<FormItemOption[]>({
        url: props.url,
        params: props.urlParams,
      })
      .then((result) => {
        options.value = result;
      })
      .finally(() => {
        loading.value = false;
      });
  });

  onMounted(() => {
    options.value = [];
  });
</script>

<style scoped lang="scss">
  .icon {
    vertical-align: middle;
  }
</style>
