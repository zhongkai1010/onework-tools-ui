<template>
  <el-select :loading="optionFetch.isFetching.value">
    <el-option
      v-for="item in optionFetch.data.value"
      :key="item.value"
      :label="item.text"
      :value="item.value"
    />
  </el-select>
</template>

<script setup lang="ts">
  import { useHttpFetch } from '/@/hooks/fetch';
  import commonApi from '/@/api/common';
  import { DictionarNameEnum } from '/@/enums/dictionarNameEnum';

  interface Props {
    name: DictionarNameEnum;
  }
  const props = defineProps<Props>();
  const optionFetch = useHttpFetch(commonApi.getOptions, props.name, { immediate: true });
</script>

<style scoped></style>
