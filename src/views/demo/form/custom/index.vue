<template>
  <page-view class="container" :gutter="0" :bg-color="false">
    <el-card shadow="always">
      <template #header>
        <div class="header">
          <iconify-icon icon="ant-design:form-outlined" :size="25" />
          <span>动态表格</span>

          <el-button type="primary">配置表格</el-button>
          <el-button>查看效果</el-button>
          <el-button @click="onShowConfig">查看配置</el-button>
        </div>
      </template>
      <el-form>
        <FieldView v-model="fileds" />
      </el-form>
    </el-card>
  </page-view>
</template>

<script setup lang="ts">
  import FieldView from './components/Field.vue';
  import { Field } from './types';
  import { log } from '/@/utils/log';

  const fileds = ref<Field[]>([]);

  const onShowConfig = () => log('config', fileds.value);

  // const onAddField = () => {};
  // const onRemoveField = () => {};
</script>

<style lang="scss" scoped>
  .container {
    .header {
      display: flex;
      align-items: center;
      i {
        margin-right: 5px;
      }
      span {
        margin-right: auto;
      }
    }
  }
</style>
