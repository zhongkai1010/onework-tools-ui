<template>
  <div class="header-container" :class="[showState.layout]">
    <Logo class="logo" v-if="showState.logo" />
    <i
      :class="`${menufold ? 'ri-menu-unfold-fill' : 'ri-menu-fold-line'} fold`"
      v-if="showState.i"
      @click="onClickFold"
    />
    <Nav :data="tabs" class="nav" v-if="showState.nav && showState.layout == 'complex'" />
    <Menu :data="menus" class="nav" v-if="showState.nav && showState.layout == 'horizontal'" />
    <Breadcrumb
      class="breadcrumb"
      v-if="showState.breadcrumb"
      :data="[
        { title: '首页', path: '/', icon: 'ant-design:home-outlined' },
        { title: '示例', path: '/demo', icon: 'mdi:ev-plug-chademo' },
        { title: '布局', path: '/demo/layout', icon: 'ant-design:layout-outlined' }
      ]"
    />
    <Tools />
    <Avatar :avatar="logoImg" :username="'系统管理员'" />
  </div>
</template>

<script setup lang="ts">
import Tools from "./components/tools.vue";
import Breadcrumb from "./components/breadcrumb.vue";
import Avatar from "./components/avatar.vue";
import Nav from "./components/nav.vue";
import Menu from "./components/menu.vue";
import Logo from "./components/logo.vue";
import logoImg from "/@/assets/logo.png";
import { getTabs, getMenus } from "/@/layouts/utils";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import { pageStateStoreHook } from "/@/store/pageState";
import { computed } from "vue";

const showState = computed(() => {
  const layout = siteConfigStoreHook().layout;
  return {
    logo: layout === "horizontal" || layout === "standard",
    i: layout === "column" || layout === "complex" || layout === "portrait",
    nav: layout === "horizontal",
    breadcrumb: layout === "column" || layout === "float" || layout === "portrait",
    layout
  };
});
const menufold = computed(() => pageStateStoreHook().menufold);

const { menus } = getMenus();
const tabs = getTabs();

const onClickFold = () => {
  pageStateStoreHook().setValue("menufold", !menufold.value);
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

.column,
.portrait {
  .fold {
    margin-right: 20px;
  }
  .breadcrumb {
    margin-right: auto;
  }
}
.complex {
  .fold {
    margin-right: auto;
  }
  .nav {
    width: calc(100% - 500px);
  }
}

.float {
  .breadcrumb {
    margin-right: auto;
  }
}
.horizontal {
  .nav {
    width: calc(100% - 640px);
    margin-right: auto;
  }
}
.standard {
  .logo {
    margin-left: 20px;
    margin-right: auto;
  }
}
</style>
