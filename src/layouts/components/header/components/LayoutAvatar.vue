<template>
  <div class="container">
    <ElDropdown @visible-change="onChange">
      <span class="avatar">
        <ElAvatar :src="props.avatar" shape="circle" />
        <span class="username">{{ props.username }}</span>
        <i :class="visibleState ? 'ri-arrow-down-s-line active' : 'ri-arrow-down-s-line'" />
      </span>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem v-for="item in avatarItems" :key="item.command" :command="item.command">
            {{ item.text }}
          </ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { avatarItems } from "/@/layouts/utils";
const props = defineProps<{
  avatar?: string;
  username: string;
}>();

const visibleState = ref(true);
const onChange = state => {
  visibleState.value = state;
};
</script>

<style lang="scss" scoped>
.container {
  .avatar {
    display: flex;
    align-content: center;
    align-items: center;
    // i {
    //   color: $header-color;
    // }
    &:deep(.el-avatar) {
      // background-color: $header-background-color;
      img {
        width: 32px;
        height: 32px;
      }
    }
    &.active {
      transform: rotate(180deg);
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s, color 0.1s, font-size 0s;
    }
  }
  .username {
    margin-left: 6px;
    white-space: nowrap;
    height: 40px;
    text-overflow: ellipsis;
    line-height: 40px;
    cursor: pointer;
    // color: $header-color;
  }
}
</style>
