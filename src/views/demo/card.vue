<template>
  <page-container>
    <div class="tools-container">
      <el-space :size="25">
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
    </div>
  </page-container>
</template>

<script lang="ts" setup>
import { Random as random } from "mockjs";
</script>

<style lang="scss" scoped>
.card-container {
  width: 400px;
}
.tools-container {
  min-width: 400px;
  height: 40px;
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
