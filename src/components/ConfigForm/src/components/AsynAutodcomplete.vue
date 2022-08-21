<template>
  <el-autocomplete
    :value-key="valueKey"
    :model-value="props.modelValue"
    :fetch-suggestions="querySearch"
    clearable
    :trigger-on-focus="false"
    @update:model-value="(value) => $emit('update:modelValue', value)"
    v-bind="props.autocomplete"
  />
</template>

<script setup lang="ts">
  import { FormItemOption } from '../..';
  import { http } from '/@/plugins/axios';
  const props = defineProps<{
    modelValue: any;
    keywordsKey?: string;
    url: string;
    autocomplete?: any;
  }>();

  const valueKey = computed(() => {
    if (props.autocomplete && props.autocomplete.valueKey) {
      return props.autocomplete.valueKey;
    }
    return 'label';
  });

  const list = ref<FormItemOption[]>([]);

  const querySearch = async (queryString, cb) => {
    if (queryString) {
      const params = {};
      params[props.keywordsKey ?? 'keywords'] = queryString;

      const data = await http.get<FormItemOption[]>({
        url: props.url,
        params,
      });
      list.value = data;
      cb(list.value);
    } else {
      cb(list.value);
    }
  };

  onMounted(() => {
    list.value = [];
  });
</script>
