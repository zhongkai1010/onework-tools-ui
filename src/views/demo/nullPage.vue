<template>
  <page-view v-bind="formValues">
    <el-form :model="formValues">
      <el-form-item label="颜色">
        <el-color-picker v-model="formValues.color" />
      </el-form-item>
      <el-form-item label="外间距">
        <el-input-number v-model="formValues.margin" :min="0" :max="20" />
      </el-form-item>
      <el-form-item label="内间距">
        <el-input-number v-model="formValues.padding" :min="0" :max="20" />
      </el-form-item>
    </el-form>
  </page-view>
</template>

<script setup lang="ts">
  const formValues = reactive({
    margin: 20,
    color: '#ffff',
    padding: 20,
  });
</script>

<style scoped></style>
