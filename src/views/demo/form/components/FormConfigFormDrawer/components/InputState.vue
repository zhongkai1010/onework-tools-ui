<template>
  <div>
    <el-divider content-position="left">状态设置</el-divider>
    <el-form-item label="是否显示标签" :required="true" prop="showLabel">
      <el-switch v-model="formValue.showLabel" />
    </el-form-item>
    <el-form-item label="是否只读" :required="true">
      <el-switch v-model="formValue.props.readonly" prop="props.readonly" />
    </el-form-item>
    <el-form-item label="是否禁用" :required="true" prop="props.disabled">
      <el-switch v-model="formValue.props.disabled" />
    </el-form-item>
    <el-form-item label="是否必填">
      <el-switch v-model="formValue.required" prop="required" />
    </el-form-item>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
