<template>
  <div class="sider-container">
    <BasicMenu :items="props.menus" :prop="{ router: true, defaultActive, uniqueOpened: true }" />
  </div>
</template>

<script setup lang="ts">
  import { BasicMenu } from '/@/components/Menu';
  import { PageEnum } from '/@/enums/pageEnum';
  import { listenerRouteChange } from '/@/logics/mitt/routeChange';
  import { REDIRECT_NAME } from '/@/router/constant';
  import { Menu } from '/@/router/types';
  import { useUserStore } from '/@/store/modules/user';

  interface Props {
    menus: Menu[];
  }
  const userStore = useUserStore();

  const homePath = userStore.getUserInfo.homePath ?? PageEnum.BASE_HOME;

  const props = defineProps<Props>();

  const defaultActive = ref(homePath);

  listenerRouteChange((route) => {
    if (route.name === REDIRECT_NAME) return;
    defaultActive.value = route.path;
    console.log('sider-listenerRouteChange');
  });
</script>
<style lang="scss" scoped>
  .sider-container {
    box-shadow: 1px 0 4px #00152914;
    // &:deep(svg) {
    //   font-size: 14px;
    //   margin-right: 5px;
    // }

    &:deep(.el-menu-item) {
      &.is-active {
        background-color: #408cff;
        color: #fff;
      }
    }

    &:deep(.el-menu) {
      height: 100%;
      border: 0;
    }
  }
</style>
