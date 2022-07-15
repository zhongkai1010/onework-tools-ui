<template>
  <div class="header-container" :class="[showState.layout]">
    <i class="ri-menu-fold-line fold" v-if="showState.i" />
    <Nav :data="getTabs()" class="nav" v-if="showState.nav && showState.layout == 'complex'" />
    <Menu :data="getTabs()" class="nav" v-if="showState.nav && showState.layout == 'horizontal'" />
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
import Tools from "./tools.vue";
import Breadcrumb from "./breadcrumb.vue";
import Avatar from "./avatar.vue";
import Nav from "./nav.vue";
import Menu from "./menu.vue";
import logoImg from "/@/assets/logo.png";
import { getTabs } from "/@/layouts/utils";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import { computed } from "vue";
const showState = computed(() => {
  const layout = siteConfigStoreHook().layout;
  return {
    i: layout === "column" || layout === "complex" || layout === "portrait",
    nav: layout === "horizontal",
    breadcrumb: layout === "column" || layout === "float" || layout === "portrait",
    layout
  };
});
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
    width: calc(100% - 420px);
    margin-right: auto;
  }
}
</style>
