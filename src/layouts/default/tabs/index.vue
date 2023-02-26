<template>
  <div class="tabs-container">
    <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="User" name="first" />
      <el-tab-pane label="Config" name="second" />
      <el-tab-pane label="Role" name="third" />
      <el-tab-pane label="Task" name="fourth" />
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import type { TabsPaneContext } from 'element-plus';

  const activeName = ref('first');

  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
  };
</script>
<style lang="scss" scoped>
  .tabs-container {
  }
</style>
