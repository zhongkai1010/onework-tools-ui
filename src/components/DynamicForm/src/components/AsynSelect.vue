<template>
  <el-autocomplete
    :value-key="valueKey"
    :model-value="props.modelValue"
    :fetch-suggestions="querySearch"
    clearable
    :trigger-on-focus="false"
    @update:model-value="(value) => $emit('update:modelValue', value)"
    v-bind="props.autocompleteProps"
  />
</template>

<script setup lang="ts">
  import { http } from '/@/plugins/axios';
  const props = defineProps<{
    modelValue: any;
    keywordsKey?: string;
    url: string;
    autocompleteProps?: any;
  }>();

  const valueKey = computed(() => {
    if (props.autocompleteProps && props.autocompleteProps.valueKey) {
      return props.autocompleteProps.valueKey;
    }
    return 'label';
  });

  const list = ref<Array<{ label: string; value: string }>>([]);

  const querySearch = async (queryString, cb) => {
    if (queryString) {
      const params = {};
      params[props.keywordsKey ?? 'keywords'] = queryString;

      const data = await http.get<Array<{ label: string; value: string }>>({
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
