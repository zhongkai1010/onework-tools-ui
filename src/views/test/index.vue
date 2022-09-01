<template>
  <page-view class="container">
    <el-form :model="formValue">
      <el-form-item label="数据配置">
        <form-item component="OwFormSetRule" v-model="formValue.rules" :toggle="true" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </page-view>
</template>

<script setup lang="ts">
  import { FormItemRule } from '/@/components/DynamicForm';

  const formValue = reactive<{ rules: FormItemRule[] }>({
    rules: [],
  });
  const onSubmit = () => {
    formValue.rules = [];
  };
  watch([formValue], () => {
    console.log('--test watch--', formValue);
  });
</script>

<style lang="scss" scoped>
  .container {
    .box-card {
      min-height: $main-no-margin-height;
      .card-header {
        display: flex;
        align-items: center;
        span {
          margin-right: auto;
        }
      }
    }

    &:deep(.el-drawer__header) {
      margin-bottom: 20px;
    }

    &:deep(.el-drawer__body) {
      @include scrollBar;
    }
  }
</style>
