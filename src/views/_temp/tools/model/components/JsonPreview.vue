<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-21 14:44:43
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-21 15:06:51
 * @FilePath: \onework-tools-ui\src\views\tools\model\components\JsonPreview.vue
 * @Description:
-->
<template>
  <el-dialog v-model="show" title="代码" width="60%" class="abc">
    <form-json :model-value="code" />
  </el-dialog>
</template>

<script setup lang="ts">
  import { JsonPreviewInstance } from '../types';

  const show = ref<boolean>(false);
  const code = ref<string>('');
  const onOpen = (value: string) => {
    show.value = true;
    code.value = value;
  };
  defineExpose<JsonPreviewInstance>({
    open: onOpen
  });
</script>

<style lang="scss" scoped>
  .abc {
    padding: 0px;
  }
</style>
