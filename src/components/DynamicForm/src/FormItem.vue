<template>
  <component
    :is="props.component"
    v-bind="fixedProps"
    :config="props.config"
    :model-value="inputValue"
    @update:model-value="onUpdateModelValue"
    v-if="isSlot"
  >
    <IconifyIcon icon="line-md:loading-twotone-loop" :size="16" v-if="isFetching" class="icon" />
    <template v-if="props.component === 'el-checkbox-group' && !isFetching">
      <el-checkbox :label="item.label" v-for="item in options" :key="item.value" />
    </template>
    <template v-else-if="props.component === 'el-radio-group' && !isFetching">
      <el-radio :label="item.label" v-for="item in options" :key="item.value" />
    </template>
    <template v-else-if="props.component === 'el-select' && !isFetching">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
    <template v-else-if="props.component === 'el-upload'">
      <el-button type="primary">Click to upload</el-button>
    </template>
    <slot v-else></slot>
  </component>
  <component
    :is="props.component"
    v-bind="fixedProps"
    :config="props.config"
    :model-value="inputValue"
    @update:model-value="onUpdateModelValue"
    v-else
  />
</template>
<script setup lang="ts">
  import _ from 'lodash';
  import { FormComponentDataConfig, FormComponentType, FormComponentOption } from '..';

  import { useHttpFetch } from '/@/hooks/fetch';
  import { http } from '/@/plugins/axios';
  import { log } from '/@/utils/log';

  interface Props {
    modelValue?: any;
    component: FormComponentType;
    props?: Recordable<any>;
    config?: FormComponentDataConfig;
  }

  const props = defineProps<Props>();
  log('form item props', props.config);
  const isRemote = computed(() => {
    if (props.config?.dataMode == 'dynamic') {
      return props.config?.remote != undefined;
    }
    return false;
  });

  const { isFetching, execute } = useHttpFetch<Recordable<any>, any>(
    (params) => {
      if (isRemote.value) {
        return http.request({
          method: props.config?.remote?.method ?? 'get',
          url: props.config?.remote?.url,
          params: params
        });
      } else {
        return Promise.reject();
      }
    },
    props.config?.remote?.params,
    { immediate: false }
  );

  const emits = defineEmits<{ (e: 'update:modelValue', value: any) }>();
  const options = ref<any[]>(props.config?.options || []);

  const isSlot = computed(() => {
    return (
      props.component === 'el-checkbox-group' ||
      props.component === 'el-radio-group' ||
      props.component === 'el-select' ||
      props.component === 'el-upload'
    );
  });

  const isOptions = computed(() => {
    return (
      props.component === 'el-select' ||
      props.component === 'el-radio-group' ||
      props.component === 'el-checkbox-group' ||
      props.component === 'el-cascader'
    );
  });

  watchEffect(async () => {
    if (isOptions.value && isRemote.value) {
      const result = await execute(props.config?.remote?.params);
      const tempOptions = (result as any[]).map((t) => {
        return {
          label: t[props.config?.remote?.labelKey ?? 'label'],
          value: t[props.config.remote?.valueKey ?? 'value'],
          children: t[props.config.remote?.childerKey ?? 'children']
        } as FormComponentOption;
      });
      options.value = tempOptions;
    }
  });

  watch([props], () => {
    if (props.config?.dataMode === 'static') {
      options.value = props.config.options ?? [];
    }
  });

  /**
   * 根据不同组件，处理特定属性
   */
  const fixedProps = computed(() => {
    let attr = { ...props.props };

    if (props.component === 'el-select') {
      attr.loading = isFetching.value;
    }
    if (props.component === 'el-cascader') {
      attr.options = options.value;
    }
    if (props.component === 'el-autocomplete') {
      attr.fetchSuggestions = async (queryString, callback) => {
        const params = {};
        params[props.config?.remote?.searchKey ?? 'keywords'] = queryString;
        const result = await execute(params);
        callback(result);
      };
      attr.valueKey = props.config?.remote?.labelKey ?? 'label';
    }
    return attr;
  });

  /**
   * 解决 el-checkbox-group 、el-radio-group 将label赋值转换value值
   */
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
  /**
   * 解决 el-checkbox-group 、el-radio-group 将label值转换value值
   */
  const onUpdateModelValue = (value) => {
    const items = unref(options) as FormComponentOption[];
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

  // const attrs = useAttrs();
  // log('dynamic form item props', attrs, props);
</script>
