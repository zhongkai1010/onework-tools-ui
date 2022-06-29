<template>
  <ElDropdown popper-class="avatar">
    <span class="avatar">
      <ElAvatar :src="props.avatar" />
      <span class="username">{{ props.username }}</span>
      <IconifyIcon icon="ant-design:down-outlined" />
    </span>

    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem>个人中心</ElDropdownItem>
        <ElDropdownItem>退出系统</ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<script lang="ts" setup>
const props = defineProps<{
  avatar: string;
  username: string;
}>();
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  align-content: center;
  align-items: center;
  .username {
    margin-left: 6px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
}
</style>
