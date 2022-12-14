<template>
  <div class="sidebar-container" :data-layout="layout" :class="{ fold: menufold }">
    <div class="left" v-if="layout == 'column'">
      <layout-logo :logo="logoImg" state="logo" />
      <div class="nav">
        <layout-nav :data="navs" :select-name="selectNav" @select="onNavSelect" />
      </div>
    </div>

    <div class="right">
      <layout-logo
        class="logo"
        title="Drug Clinical Trials"
        :logo="logoImg"
        v-if="layout !== 'standard'"
        :state="
          layout == 'float' ? 'logo' : menufold ? 'logo' : layout === 'column' ? 'title' : 'all'
        "
      />
      <el-divider class="divider" content-position="center" v-if="layout == 'column'">{{
        dividerTitle
      }}</el-divider>
      <div class="menu">
        <layout-menu
          :data="layout === 'complex' ? rightMenus : layout === 'float' ? navs : menus"
          :collapse="layout == 'float' ? true : menufold"
          :default-active="selectMenu"
          @select="onMenuSelect"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import { pageStateStoreHook } from "/@/store/pageState";
import LayoutMenu from "./components/LayoutMenu.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutLogo from "./components/LayoutLogo.vue";
import logoImg from "/@/assets/logo.png";
import { useRouter } from "vue-router";
const siteConfigStore = siteConfigStoreHook();
const pageStateStore = pageStateStoreHook();
const layout = computed(() => siteConfigStore.layout);
const menuWidth = computed(() => `${siteConfigStore.menuWidth}px`);
const menufold = computed(() => pageStateStore.menufold);
const menus = computed(() => pageStateStore.menus);
const navs = computed(() => pageStateStore.rootNavs);
const selectMenu = computed(() => pageStateStore.selectMenu);
const selectNav = computed(() => pageStateStore.selectNav);
const router = useRouter();
const rightMenus = computed(() => pageStateStore.getNavMenus);
const dividerTitle = computed(() => {
  const menuMap = pageStateStore.menuMap;
  const selectMenu = pageStateStore.selectMenu;
  return menuMap[selectMenu].title;
});

const onNavSelect = (path: string) => {
  const menu = menus.value.find(t => t.path == path);
  if (menu.islink) {
    window.open(menu.path);
  }
  pageStateStore.setSelectNav(path);
  router.push(pageStateStore.selectMenu);
};

const onMenuSelect = (path: string) => {
  pageStateStore.setSelectMenu(path);
  router.push(pageStateStore.selectMenu);
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  display: flex;
  .left {
    background-color: $nav-background;
    color: $nav-color;
    .nav {
      width: $logo-width;
      height: calc(100vh - $header-height);
    }
  }
  .right {
    background-color: $color-white;
    .log {
      box-shadow: 0px 0px 4px rgb(0 21 41 / 8%);
    }
    .menu {
      width: v-bind(menuWidth);
      height: calc(100vh - $header-height);
      box-shadow: 0px 1px 4px rgb(0 21 41 / 8%);
    }
  }
  &.fold {
    .right {
      .menu {
        width: $logo-width;
      }
    }
  }
}

.sidebar-container[data-layout="column"] {
  &:deep(.el-divider--horizontal) {
    margin: 10px 10%;
    width: 80%;
  }
  .right {
    .menu {
      height: calc(100vh - 11px - $header-height);
    }
  }
  &.fold {
    .right {
      display: none;
    }
  }
}

.sidebar-container[data-layout="float"] {
  .right {
    .menu {
      width: $logo-width;
    }
  }
}
</style>
