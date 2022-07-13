<template>
  <el-space :size="20" class="tools-container">
    <IconifyIcon icon="akar-icons:lock-on" title="锁定" />
    <IconifyIcon icon="akar-icons:search" title="搜索" />
    <ElBadge :value="12" class="notice">
      <IconifyIcon icon="akar-icons:bell" title="通知" />
    </ElBadge>
    <IconifyIcon icon="akar-icons:full-screen" title="全屏" />
    <el-dropdown>
      <span class="lang">
        <IconifyIcon icon="uil:english-to-chinese" title="中英切换" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <IconifyIcon icon="carbon:cloud-satellite-config" title="设置" />
    <el-dropdown>
      <span class="avatar">
        <el-avatar :size="40" />
        <span class="username">{{ random.cword(3, 5) }}</span>
        <IconifyIcon icon="ant-design:down-outlined" :size="15" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-space>
</template>

<script lang="ts" setup>
import { Random as random } from "mockjs";
</script>

<style lang="scss" scoped>
.tools-container {
  i {
    cursor: pointer;
  }
  .notice {
    margin-top: 6px;
  }
  .avatar {
    display: flex;
    align-items: center;
    .username {
      margin-left: 12px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
