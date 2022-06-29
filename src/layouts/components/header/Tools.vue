<template>
  <div class="tool">
    <IconifyIcon icon="akar-icons:lock-on" class="button" title="锁定" />
    <IconifyIcon icon="akar-icons:search" class="button" title="搜索" />
    <ElBadge :value="12" class="button">
      <IconifyIcon icon="akar-icons:bell" title="通知" />
    </ElBadge>
    <IconifyIcon icon="akar-icons:full-screen" class="button" title="全屏" />
    <IconifyIcon icon="uil:english-to-chinese" class="button" title="中英切换" />
    <IconifyIcon icon="carbon:cloud-satellite-config" class="button" title="设置" />
    <IconifyIcon icon=" carbon:renew" class="button" title="刷新" />
    <Avatar :username="'管理员'" avatar="logoPng" />
  </div>
</template>

<script lang="ts" setup>
import Avatar from "./Avatar.vue";
</script>

<style lang="scss" scoped>
.tool {
  display: flex;
  align-items: center;
  .button {
    margin-left: 20px;
    cursor: pointer;
  }
}
</style>
