<template>
  <div class="sidebar-container" :data-layout="layout" :class="{ fold: menufold }">
    <div class="left" v-if="layout == 'column'">
      <layout-logo :logo="logoImg" state="logo" />
      <div class="nav">
        <layout-nav :data="navs" :select-name="selectNav" @select="onNavSelect" />
      </div>
    </div>
    <div class="right">
      <layout-logo title="Drug Clinical Trials" state="title" />
      <el-divider content-position="center">其它</el-divider>
      <div class="menu">
        <layout-menu
          :data="rightMenus"
          :collapse="false"
          :default-active="selectMenu"
          @select="onMenuSelect"
        />
      </div>
    </div>
    <div class="right" v-if="layout != 'column'">
      <layout-logo
        v-if="layout == 'complex' || layout == 'portrait' || layout == 'float'"
        title="Drug Clinical Trials"
        :logo="logoImg"
        :state="layout == 'float' ? 'logo' : menufold ? 'logo' : 'all'"
      />
      <div class="menu">
        <layout-menu
          :data="layout === 'complex' ? rightMenus :(layout === 'float') menus"
          :collapse="menufold"
          :default-active="selectMenu"
          @select="onMenuSelect"
        />
      </div>
    </div>

    <template v-if="layout == 'complex' || layout == 'portrait'">
      <div class="right">
        <layout-logo
          title="Drug Clinical Trials"
          :state="menufold ? 'logo' : 'all'"
          :logo="logoImg"
        />
        <div class="menu">
          <layout-menu
            :data="layout === 'complex' ? rightMenus : menus"
            :collapse="menufold"
            :default-active="selectMenu"
            @select="onMenuSelect"
          />
        </div>
      </div>
    </template>
    <template v-if="layout == 'standard'">
      <div class="right">
        <div class="menu">
          <layout-menu
            :data="menus"
            :collapse="menufold"
            :default-active="selectMenu"
            @select="onMenuSelect"
          />
        </div>
      </div>
    </template>
    <template v-if="layout == 'float'">
      <div class="right">
        <layout-logo :logo="logoImg" state="logo" />
        <div class="menu">
          <layout-menu
            :data="navs"
            :collapse="true"
            :default-active="selectNav"
            @select="onMenuSelect"
          />
        </div>
      </div>
    </template>
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
    .nav {
      width: $logo-width;
      height: calc(100vh - $header-height);
    }
  }
  .right {
    .menu {
      width: v-bind(menuWidth);
      height: calc(100vh - $header-height);
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
