<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-19 14:59:15
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-19 15:16:16
 * @FilePath: \onework-tools-ui\src\components\Form\src\FormSelectAsync.vue
 * @Description:
-->
<template>
  <el-select :loading="optionFetch.isFetching.value">
    <el-option
      v-for="item in optionFetch.data.value"
      :key="item[props.valueKey]"
      :label="item[props.labelKey ?? 'text']"
      :value="item[props.valueKey ?? 'value']"
    />
  </el-select>
</template>

<script setup lang="ts">
  import { useHttpFetch } from '/@/hooks/fetch';
  import { http } from '/@/plugins/axios';

  interface Props {
    url: string;
    labelKey?: string;
    valueKey?: string;
  }
  const props = defineProps<Props>();
  const fetch = (params: Recordable<any>) =>
    http.get<Array<Recordable<any>>>({ url: props.url, params });
  const optionFetch = useHttpFetch(fetch, null, { immediate: true });
</script>

<style scoped></style>
