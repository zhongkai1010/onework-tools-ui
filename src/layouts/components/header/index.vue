<template>
  <div class="header-container" :data-layout="showState.layout">
    <layout-logo class="logo" v-if="showState.logo" />
    <i
      :class="`${menufold ? 'ri-menu-unfold-fill' : 'ri-menu-fold-line'} fold`"
      v-if="showState.i"
      @click="onClickFold"
    />
    <layout-nav
      :data="tabs"
      :select-name="selectNav"
      class="nav"
      v-if="showState.layout == 'complex'"
      @select="onNavSelect"
    />
    <layout-menu :data="menus" class="nav" v-if="showState.layout == 'horizontal'" />
    <layout-breadcrumb
      class="breadcrumb"
      v-if="showState.breadcrumb"
      :data="[
        { title: '首页', path: '/', icon: 'ant-design:home-outlined' },
        { title: '示例', path: '/demo', icon: 'mdi:ev-plug-chademo' },
        { title: '布局', path: '/demo/layout', icon: 'ant-design:layout-outlined' }
      ]"
    />
    <layout-tools />
    <layout-avatar :avatar="logoImg" :username="'系统管理员'" />
  </div>
</template>

<script setup lang="ts">
import LayoutTools from "./components/LayoutTools.vue";
import LayoutBreadcrumb from "./components/LayoutBreadcrumb.vue";
import LayoutAvatar from "./components/LayoutAvatar.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutMenu from "./components/LayoutMenu.vue";
import LayoutLogo from "./components/LayoutLogo.vue";
import logoImg from "/@/assets/logo.png";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import { pageStateStoreHook } from "/@/store/pageState";
import { computed } from "vue";
import { useRouter } from "vue-router";
const pageStateStore = pageStateStoreHook();
const showState = computed(() => {
  const layout = siteConfigStoreHook().layout;
  return {
    logo: layout === "horizontal" || layout === "standard",
    i: layout === "column" || layout === "complex" || layout === "portrait",
    breadcrumb: layout === "column" || layout === "float" || layout === "portrait",
    layout
  };
});
const menufold = computed(() => pageStateStoreHook().menufold);
const menus = computed(() => pageStateStore.menus);
const tabs = computed(() => pageStateStore.rootNavs);
const selectNav = computed(() => pageStateStore.selectNav);
const router = useRouter();
const onClickFold = () => {
  pageStateStoreHook().setValue("menufold", !menufold.value);
};

const onNavSelect = (path: string) => {
  const menu = menus.value.find(t => t.path == path);
  if (menu.islink) {
    window.open(menu.path);
  }
  pageStateStore.setSelectNav(path);
  router.push(pageStateStore.selectMenu);
};
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: $header-height;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: $header-background-color;
  color: $header-color;
  padding: 0 20px;
}

.header-container[data-layout="column"],
.header-container[data-layout="portrait"] {
  .fold {
    margin-right: 20px;
  }
  .breadcrumb {
    margin-right: auto;
  }
}

.header-container[data-layout="complex"] {
  .fold {
    margin-right: auto;
  }
  .nav {
    width: calc(100% - 500px);
  }
}

.header-container[data-layout="float"] {
  .breadcrumb {
    margin-right: auto;
  }
}

.header-container[data-layout="horizontal"] {
  .nav {
    width: calc(100% - 640px);
    margin-right: auto;
  }
}

.header-container[data-layout="standard"] {
  .logo {
    margin-left: 20px;
    margin-right: auto;
  }
}
</style>
