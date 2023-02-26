<template>
  <div class="layout-wrapper">
    <LayoutHeader class="header-wrapper" :user="userStore.userInfo" />
    <div class="main-wrapper">
      <LayoutSider class="sider-wrapper" />
      <div class="content-wrapper">
        <div></div>
        <LayoutTabs class="tabs-wrapper" />
        <div></div>
        <div class="body-wrapper">
          <ul v-for="i in 1000" :key="i">
            <li>{{ i }}</li>
          </ul>
        </div>
        <LayoutFooter class="footer-wrapper" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import LayoutFooter from './footer/index.vue';
  import LayoutTabs from './tabs/index.vue';
  import LayoutSider from './sider/index.vue';
  import LayoutHeader from './header/index.vue';
  import { useUserStoreWithOut } from '/@/store/modules/user';
  import { usePermissionStoreWithOut } from '/@/store/modules/permission';

  const userStore = useUserStoreWithOut();
  const permissionStore = usePermissionStoreWithOut();

  const menus = permissionStore.buildRoutesAction();
  console.log('menus', menus);
</script>

<style lang="scss" scoped>
  .layout-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .header-wrapper {
      display: flex;
      height: $layout-hearder-height;
    }
    .main-wrapper {
      background-color: #fff1dc;
      display: flex;
      .sider-wrapper {
        background-color: #e8d5c4;
        width: $layout-sider-width;
        height: calc(100vh - $layout-hearder-height);
      }
      .content-wrapper {
        display: flex;
        flex-direction: column;
        background-color: #eeeeee;
        width: calc(100vw - $layout-sider-width);
        height: calc(100vh - $layout-hearder-height);
        .tabs-wrapper {
          background-color: #ad7be9;
          height: $layout-tabs-height;
        }
        .body-wrapper {
          height: 1120px;
          overflow: auto;
          @include scrollBar;
        }
        .footer-wrapper {
          box-shadow: 0px 0 5px rgb(0 21 41 / 8%);
          background-color: #eeeeee;
        }
      }
    }
  }
</style>
