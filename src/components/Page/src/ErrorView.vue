<template>
  <page-view class="container">
    <iconify-icon icon="bx:error-circle" :size="200" class="icon" />
    <span class="code">{{ props.code }}</span>
    <span class="msg">{{ props.message }}</span>
  </page-view>
</template>

<script setup lang="ts">
  const props = defineProps<{
    code?: number;
    message?: string;
  }>();
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 30px;

    .msg {
      font-weight: 500;
    }

    .icon {
      color: var(--el-color-error);
    }
  }
</style>
