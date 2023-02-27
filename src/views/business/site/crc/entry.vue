<template>
  <PageWrapper class="page-container" interval>
    <el-tabs :modelValue="pageConfig.defalutTab" type="card">
      <el-tab-pane v-for="tab in tabs" :label="tab.text" :name="tab.name" :key="tab.name">
        <component :is="tab.component" />
      </el-tab-pane>
    </el-tabs>
  </PageWrapper>
</template>

<script setup lang="ts">
  import ReviewedTab from './components/entry/ReviewedTab.vue';
  import AuditedTab from './components/entry/AuditedTab.vue';
  import { PageWrapper } from '/@/components/Page';
  const pageConfig = {
    defalutTab: 'reviewed'
  };
  const tabs = [
    { name: 'reviewed', text: '待审核', component: ReviewedTab },
    { name: 'audited', text: '已审核', component: AuditedTab }
  ];
</script>

<style scoped lang="scss">
  .page-container {
    &:deep(.el-tabs__nav) {
      border-radius: 5px;
    }

    & :deep(.el-tabs__item) {
      padding: 0 40px !important;
      &.is-active {
        color: #fff;
        background-color: var(--el-color-primary);
      }
    }
  }
</style>
