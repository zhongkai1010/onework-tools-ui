<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-19 14:44:07
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-19 14:47:50
 * @FilePath: \onework-tools-ui\src\components\Card\src\TitleCard.vue
 * @Description:
-->
<template>
  <el-card class="container">
    <template #header>
      <div class="header">
        <iconify-icon :icon="props.icon" />
        <span>{{ props.title }}</span>
        <div class="button">
          <slot name="button"></slot>
        </div>
      </div>
    </template>
    <slot></slot>
  </el-card>
</template>

<script setup lang="ts">
  interface Props {
    icon: string;
    title: string;
  }

  const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
  .container {
    .el-card__header {
      .header {
        display: flex;
        align-items: center;
        height: 25px;
        i {
          font-size: 14px;
          margin-right: 5px;
        }
        .button {
          display: flex;
          cursor: pointer;
          margin-left: auto;
        }
      }
    }
    :deep(.el-card__body) {
      min-height: calc($main-no-margin-height - 70px);
    }
  }
</style>
