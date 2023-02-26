<template>
  <div class="sider-container">
    <el-menu router>
      <template v-for="menu in props.menus" :key="menu.name">
        <el-sub-menu v-if="menu.meta" :index="menu.name">
          <template #title>
            <Icon :icon="menu.icon" v-if="menu.icon" />
            <span>{{ t(menu.meta?.title as string) }}</span>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { Menu } from '/@/router/types';
  const { t } = useI18n();

  interface Props {
    menus: Menu[];
  }

  const props = defineProps<Props>();
  console.log(props);
</script>
<style lang="scss" scoped>
  .sider-container {
    box-shadow: 1px 0 4px #00152914;
    svg {
      font-size: 20px;
      margin-right: 5px;
    }

    .el-menu-item {
      &.is-active {
        background-color: #408cff;
        color: #fff;
      }
    }

    .el-menu {
      height: 100%;
      border: 0;
    }
  }
</style>
