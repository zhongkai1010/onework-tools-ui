<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-19 14:53:28
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-19 14:56:11
 * @FilePath: \onework-tools-ui\src\components\Button\src\ButtonIcon.vue
 * @Description:
-->
<template>
  <el-button>
    <span>{{ props.text }}</span>
  </el-button>
</template>

<script setup lang="ts">
  interface Props {
    icon: string;
    text: string;
  }

  const props = defineProps<Props>();
</script>
