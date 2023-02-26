<template>
  <div class="layout-wrapper">
    <LayoutHeader class="header" :user="userStore.userInfo" />
    <div class="main">
      <LayoutSider class="sider" :menus="menus" />
      <div class="content">
        <div class="tabs">
          <div class="fold">
            <Icon icon="ep:fold" />
            <!-- <Icon icon="ep:expand" /> -->
          </div>
          <LayoutTabs class="nav" />
          <div class="operate">
            <Icon icon="ep:menu" />
          </div>
        </div>
        <div class="body">
          <router-view />
        </div>
      </div>
    </div>
    <LayoutFooter class="footer" />
  </div>
</template>

<script setup lang="ts">
  import LayoutFooter from './footer/index.vue';
  import LayoutTabs from './tabs/index.vue';
  import LayoutSider from './sider/index.vue';
  import LayoutHeader from './header/index.vue';
  import { useUserStoreWithOut } from '/@/store/modules/user';

  import { getMenus } from '/@/router/menus';
  import { Icon } from '@iconify/vue';
  const userStore = useUserStoreWithOut();

  const menus = await getMenus();

  console.log('menus', menus);
</script>

<style lang="scss" scoped>
  .layout-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .header {
      display: flex;
      height: $layout-hearder-height;
    }
    .main {
      display: flex;
      .sider {
        width: $layout-sider-width;
        height: calc(100vh - $layout-hearder-height);
        box-shadow: 1px 0px 5px rgb(0 21 41 / 8%);
        z-index: 2;
      }
      .content {
        display: flex;
        flex-direction: column;

        width: calc(100vw - $layout-sider-width);
        height: calc(100vh - $layout-hearder-height);
        .tabs {
          height: $layout-tabs-height;
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-shrink: 0;
          padding: 0 20px;
          box-shadow: 0px 0 5px rgb(0 21 41 / 8%);
          background-color: #fff;
          .fold {
            width: 20px;
            font-size: 20px;
            cursor: pointer;
          }
          .nav {
            width: calc(100% - 40px);
            padding: 0 10px;
            height: 50px;
          }
          .operate {
            width: 20px;
            font-size: 20px;
            cursor: pointer;
          }
        }
        .body {
          height: 1120px;
          overflow: auto;
          @include scrollBar;
        }
      }
    }
    .footer {
      position: absolute;

      bottom: 0px;
      width: 100vw;
      text-align: center;
    }
  }
</style>
