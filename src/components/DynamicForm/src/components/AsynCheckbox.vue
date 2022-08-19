<template>
  <IconifyIcon icon="line-md:loading-twotone-loop" :size="32" v-if="loading" class="icon" />
  <el-checkbox-group
    v-if="!loading"
    :model-value="props.modelValue"
    @update:model-value="(value) => $emit('update:modelValue', value)"
    v-bind="props.checkboxProps"
  >
    <el-checkbox
      v-for="option in options"
      :key="option[props.valueKey ?? 'value']"
      :label="option[props.labelKey ?? 'label']"
    />
  </el-checkbox-group>
</template>

<script setup lang="ts">
  import { FormItemOption } from '../..';
  import { http } from '/@/plugins/axios';

  const options = ref([]);
  const loading = ref(false);
  const props = defineProps<{
    modelValue: any;
    valueKey?: string;
    labelKey?: string;
    url: string;
    urlParams?: any;
    checkboxProps?: any;
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
