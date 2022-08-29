<template>
  <component
    :is="props.component"
    :config="props.config"
    :model-value="inputValue"
    :loading="loading"
    @update:model-value="onUpdateModelValue"
  >
    <IconifyIcon icon="line-md:loading-twotone-loop" :size="16" v-if="loading" class="icon" />
    <template v-if="props.component === 'el-checkbox-group' && !loading">
      <el-checkbox :label="item.label" v-for="item in options" :key="item.value" />
    </template>
    <template v-else-if="props.component === 'el-radio-group' && !loading">
      <el-radio :label="item.label" v-for="item in options" :key="item.value" />
    </template>
    <template v-else-if="props.component === 'el-select' && !loading">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
    <slot v-else> </slot>
  </component>
</template>
<script setup lang="ts">
  import _ from 'lodash';
  import { FormComponent, FormItemOption, FormItemRemote } from '..';
  import { http } from '/@/plugins/axios';
  import { log } from '/@/utils/log';

  const props = defineProps<{
    modelValue?: any;
    component: FormComponent;
    config?: Recordable<any>;
  }>();

  const emits = defineEmits<{ (e: 'update:modelValue', value: any) }>();
  const options = ref<any[]>(props.config?.options || []);
  const loading = ref(false);

  const inputValue = computed(() => {
    if (!props.modelValue) return props.modelValue;
    const items = unref(options);
    if (props.component === 'el-checkbox-group' && _.isArray(props.modelValue)) {
      const values = (props.modelValue || []) as any[];
      return values.map((v) => {
        const option = items.find((t) => t.value === v);
        if (!option) return v;
        return option.label;
      });
    }
    if (props.component === 'el-radio-group') {
      const option = items.find((t) => t.value == props.modelValue);
      if (!option) props.modelValue;
      return option.label;
    }
    return props.modelValue;
  });

  const onUpdateModelValue = (value) => {
    const items = unref(options) as FormItemOption[];
    if (props.component === 'el-checkbox-group') {
      const values = (value as string[]).map((v) => {
        const option = items.find((t) => t.label === v);
        return option.value;
      });
      emits('update:modelValue', values);
    } else if (props.component === 'el-radio-group') {
      const option = items.find((t) => t.label == value);
      emits('update:modelValue', option.value);
    } else {
      emits('update:modelValue', value);
    }
  };
  const handleRemote = (remote: FormItemRemote) => {
    loading.value = true;
    http
      .get<any[]>({
        url: remote.url,
      })
      .then((result) => {
        handleRemoteReulst(result, remote);
      })
      .finally(() => {
        loading.value = false;
      });
  };
  const handleRemoteReulst = (result: any, config: FormItemRemote) => {
    const tempOps = result.map((t) => {
      return {
        label: t[config.labelKey],
        value: t[config.valueKey],
        children: t[config.childerKey],
      } as FormItemOption;
    });
    options.value = tempOps;
  };
  watchEffect(() => {
    if (props.config?.remote) {
      handleRemote(props.config?.remote);
    }
  });
  const attrs = useAttrs();
  log('form-item props', attrs, props);
</script>
