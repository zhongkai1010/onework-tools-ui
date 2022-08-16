<template>
  <page-view>
    <el-tabs class="demo-tabs">
      <el-tab-pane label="Remixicon">
        <ul class="ui-container">
          <li v-for="icon in icons" :key="icon">
            <iconify-icon :icon="`ri:${icon}`" />
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="Iconify">Config</el-tab-pane>
      <el-tab-pane label="Element-Plus">Role</el-tab-pane>
      <el-tab-pane label="Iconfont">Task</el-tab-pane>
    </el-tabs>
  </page-view>
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import { http } from '/@/utils/http';

  const icons = ref([]);

  http.get<any, { icons: string[] }>('/public/data/ri-meta.json').then((data) => {
    icons.value = data.icons;
  });
</script>

<style lang="scss" scoped>
  .ui-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
