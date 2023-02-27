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
  import ReviewedTab from './components/job/ReviewedTab.vue';
  import AuditedTab from './components/job/AuditedTab.vue';
  import { PageWrapper } from '/@/components/Page';
  const pageConfig = {
    defalutTab: 'reviewed'
  };
  const tabs = [
    { name: 'reviewed', text: '在职CRC', component: ReviewedTab },
    { name: 'audited', text: '实习CRC', component: AuditedTab }
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
