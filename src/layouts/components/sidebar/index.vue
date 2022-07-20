<template>
  <div class="sidebar-container" :data-layout="layout" :class="{ fold: menufold }">
    <template v-if="layout == 'column'">
      <div class="left">
        <layout-logo :logo="logoImg" state="logo" />
        <div class="nav">
          <layout-nav :data="navs" @select="onNavSelect" />
        </div>
      </div>
      <div class="right">
        <layout-logo title="Drug Clinical Trials" state="title" />
        <el-divider content-position="center">其它</el-divider>
        <div class="menu">
          <layout-menu :data="rightMenus" :collapse="false" />
        </div>
      </div>
    </template>
    <template v-if="layout == 'complex' || layout == 'portrait'">
      <div class="right">
        <layout-logo
          title="Drug Clinical Trials"
          :state="menufold ? 'logo' : 'all'"
          :logo="logoImg"
        />
        <div class="menu">
          <layout-menu :data="menus" :collapse="menufold" />
        </div>
      </div>
    </template>
    <template v-if="layout == 'standard'">
      <div class="right">
        <div class="menu">
          <layout-menu :data="menus" :collapse="menufold" />
        </div>
      </div>
    </template>
    <template v-if="layout == 'float'">
      <div class="right">
        <layout-logo :logo="logoImg" state="logo" />
        <div class="menu">
          <layout-menu :data="navs" :collapse="true" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import { defaultNav, pageStateStoreHook } from "/@/store/pageState";
import LayoutMenu from "./components/LayoutMenu.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutLogo from "./components/LayoutLogo.vue";
import logoImg from "/@/assets/logo.png";
import { useRouter } from "vue-router";
import { NavRecordRaw } from "../../types";
const layout = computed(() => siteConfigStoreHook().layout);
const menuWidth = computed(() => `${siteConfigStoreHook().menuWidth}px`);
const menufold = computed(() => pageStateStoreHook().menufold);
const menus = computed(() => pageStateStoreHook().menus);
const navs = computed(() => pageStateStoreHook().navs);
const router = useRouter();
const rightMenus = ref([]);

const onNavSelect = (name: string) => {
  const menu = menus.value.find(t => t.name == name);
  if (menu.islink) {
    window.open(menu.path);
  }
  rightMenus.value = menu.children || [];
  if (rightMenus.value.length == 0) {
    router.push(defaultNav.path);
  } else {
    const nav = rightMenus.value[0] as NavRecordRaw;
    router.push(nav.path);
  }
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
