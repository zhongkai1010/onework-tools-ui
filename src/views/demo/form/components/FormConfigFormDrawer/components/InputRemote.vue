<template>
  <div class="remote-container">
    <el-divider content-position="left">动态数据</el-divider>
    <el-form-item label="接口地址" prop="props.remote.url">
      <el-input v-model="formValue.url">
        <template #prepend>
          <el-select v-model="formValue.method" style="width: 90px">
            <el-option label="POST" value="post" />
            <el-option label="GET" value="get" />
          </el-select>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="标签键名" prop="props.remote.labelKey">
      <el-input v-model="formValue.labelKey" />
    </el-form-item>
    <el-form-item label="值键名" prop="props.remote.labelKey">
      <el-input v-model="formValue.valueKey" />
    </el-form-item>
    <el-form-item label="子级键名" prop="props.remote.childerKey">
      <el-input v-model="formValue.childerKey" />
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
  import { FormItemRemoteConfig } from '/@/views/demo/form/types';

  const props = defineProps<{
    modelValue: FormItemRemoteConfig | undefined;
  }>();
  const formValue = reactive(props.modelValue);
</script>

<style scoped></style>
