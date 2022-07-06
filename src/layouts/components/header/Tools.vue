<template>
  <div class="tool">
    <IconifyIcon icon="akar-icons:lock-on" class="button" title="锁定" />
    <IconifyIcon icon="akar-icons:search" class="button" title="搜索" />
    <ElBadge :value="12" class="button">
      <IconifyIcon icon="akar-icons:bell" title="通知" />
    </ElBadge>
    <IconifyIcon icon="akar-icons:full-screen" class="button" title="全屏" />
    <IconifyIcon icon="uil:english-to-chinese" class="button" title="中英切换" />
    <IconifyIcon
      icon="carbon:cloud-satellite-config"
      class="button"
      title="设置"
      @click="onOpenDrawer"
    />
    <Avatar :username="'管理员'" avatar="logoPng" />
  </div>
  <el-drawer
    :model-value="drawerShow"
    title="I am the title"
    :with-header="false"
    @close="onCloseDrawer"
  >
    <span>Hi there!</span>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Avatar from "./Avatar.vue";

const drawerShow = ref(false);

const onOpenDrawer = () => {
  drawerShow.value = !drawerShow.value;
};
const onCloseDrawer = () => {
  drawerShow.value = false;
};
</script>

<style lang="scss" scoped>
.tool {
  display: flex;
  margin-left: auto;
  align-items: center;
  flex-direction: row;
  &:deep(.el-badge) {
    margin-top: 6px;
  }
  .button {
    width: 20px;
  }
  .button {
    margin-left: 20px;
    cursor: pointer;
  }
}
</style>
