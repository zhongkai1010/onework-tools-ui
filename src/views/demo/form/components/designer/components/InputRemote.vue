<template>
  <div class="remote-container">
    <el-divider content-position="left">动态数据</el-divider>
    <el-form-item label="接口地址" prop="component.config.remoteUrl">
      <el-input v-model="formValue.remoteUrl">
        <template #prepend>
          <el-select :model-value="formValue.remoteMethod ?? 'get'" style="width: 90px">
            <el-option label="POST" value="post" />
            <el-option label="GET" value="get" />
          </el-select>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="标签键名" prop="component.config.labelKey">
      <el-input :model-value="formValue.labelKey ?? 'label'" />
    </el-form-item>
    <el-form-item label="值键名" prop="component.config.labelKey">
      <el-input :model-value="formValue.valueKey ?? 'value'" />
    </el-form-item>
    <el-form-item label="子级键名" prop="pcomponent.config.childerKey">
      <el-input :model-value="formValue.childerKey ?? 'children'" />
    </el-form-item>
    <el-form-item label="搜索键名" prop="pcomponent.config.childerKey">
      <el-input :model-value="formValue.searchKey ?? 'keywords'" />
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
  import { FormItemRemoteConfig } from '../../../types';
  import { log } from '/@/utils/log';
  const props = defineProps<{
    modelValue: FormItemRemoteConfig;
  }>();
  const formValue = reactive(props.modelValue);
  log('remotoe', formValue);
</script>

<style scoped></style>
