<template>
  <div class="container">
    <i class="ri-lock-line button" title="锁屏" />
    <i class="ri-search-line button" title="搜索" />
    <el-popover>
      <template #reference>
        <ElBadge :value="12" class="button">
          <i class="ri-notification-line" title="通知" />
        </ElBadge>
      </template>
      <template #default>
        <div class="demo-rich-conent" style="display: flex; gap: 16px; flex-direction: column">
          <el-avatar
            :size="60"
            src="https://avatars.githubusercontent.com/u/72015883?v=4"
            style="margin-bottom: 8px"
          />
          <div>
            <p class="demo-rich-content__name" style="margin: 0; font-weight: 500">Element Plus</p>
            <p
              class="demo-rich-content__mention"
              style="margin: 0; font-size: 14px; color: var(--el-color-info)"
            >
              @element-plus
            </p>
          </div>

          <p class="demo-rich-content__desc" style="margin: 0">
            Element Plus, a Vue 3 based component library for developers, designers and product
            managers
          </p>
        </div>
      </template>
    </el-popover>
    <i class="ri-fullscreen-line button" title="全屏" />
    <el-dropdown class="button">
      <i class="ri-translate" title="中英切换" />
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
    <i class="ri-settings-line button" title="设置" />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@mixin text-center {
  text-align: center;
  cursor: pointer;
  width: 40px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  color: $header-color;
  .button {
    @include text-center();
  }
  .el-dropdown {
    padding-left: 14px;
    color: $header-color;
  }
  &:deep(.el-badge__content) {
    right: 20px;
  }
}
</style>
