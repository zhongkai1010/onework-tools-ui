<template>
  <div class="container">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item v-for="item in props.breadcrumb" :key="item.path">
        <a @click="onClick(item.path)">
          <IconifyIcon :icon="item.icon" />
          <span>{{ item.title }}</span>
        </a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
  import { MenuRecordRaw } from '/@/layouts/types';
  import { IconifyIcon } from '/@/components/Icon';
  const props = defineProps<{
    breadcrumb: MenuRecordRaw[];
    selectMenu?: string;
  }>();
  const emit = defineEmits<{
    (e: 'selectMenu', path: string): void;
  }>();
  const onClick = (path: string) => {
    if (props.selectMenu !== path) {
      emit('selectMenu', path);
    }
  };
</script>

<style lang="scss" scoped>
  .container {
    &:deep(.el-breadcrumb__inner) {
      display: flex;
      align-items: center;
      text-align: center;

      a {
        vertical-align: middle;

        i {
          margin-right: 3px;
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }
    }
  }
</style>
