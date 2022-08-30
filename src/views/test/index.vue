<template>
  <page-view class="container"> 1 </page-view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .container {
    .box-card {
      min-height: $main-no-margin-height;
      .card-header {
        display: flex;
        align-items: center;
        span {
          margin-right: auto;
        }
      }
    }

    &:deep(.el-drawer__header) {
      margin-bottom: 20px;
    }

    &:deep(.el-drawer__body) {
      @include scrollBar;
    }
  }
</style>
