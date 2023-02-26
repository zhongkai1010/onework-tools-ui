<template>
  <div class="tabs-container">
    <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane :name="`tab-${tab}`" v-for="tab in 24" :key="tab">
        <template #label>
          <span>{{ `tab-${tab}` }}</span>
          <Icon icon="ep:close" />
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import type { TabsPaneContext } from 'element-plus';
  import { Icon } from '@iconify/vue';

  const activeName = ref('first');

  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
  };
</script>
<style lang="scss" scoped>
  .tabs-container {
    &:deep(.el-tabs) {
      padding-top: 10px;
    }
    &:deep(.el-tabs__header) {
      border: 0px;
      margin: 0px;
    }
    &:deep(.el-tabs__item) {
      border: 0px;
      margin-right: 10px;
      padding: 0 25px !important;
      display: inline-flex;
      align-items: center;
      border-radius: 1px 1px 0px 0px;
      font-size: 15px;
      span {
        margin-right: 5px;
      }
      svg {
        border-radius: 50%;
        &:hover {
          background-color: #ccc;
          color: #fff;
        }
      }
      &.is-active {
        background-color: #408cff;
        color: #fff;
      }
      &:hover {
        background-color: #408cff;
        color: #fff;
      }
    }

    &:deep(.el-tabs__nav) {
      border: 0px;
    }
  }
</style>
