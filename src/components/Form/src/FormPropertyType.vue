<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-15 10:32:14
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-19 15:41:39
 * @FilePath: \onework-tools-ui\src\components\Form\src\FormPropertyType.vue
 * @Description:
-->
<template>
  <el-select :model-value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <el-option
      v-for="item in ModelPropertyTypeOptions"
      :key="item.value"
      :label="item.text"
      :value="item.value"
    />
  </el-select>
</template>

<script setup lang="ts">
  import { ModelPropertyTypeOptions } from '../types';

  defineProps<{ modelValue: any }>();
  defineEmits(['update:modelValue']);
</script>

<style scoped></style>
