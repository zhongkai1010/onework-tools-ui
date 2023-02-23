<template>
  <div class="header-container">
    <LayoutLogo class="logo" v-if="showState.logo" :title="props.title" :logo="props.logo" />
    <FlodButton class="fold" v-if="showState.i" :fold="menufold" @click="onClickFold" />
    <LayoutNav
      class="nav"
      v-if="showState.nav"
      :select-nav="selectNav"
      :navs="rootNavs"
      @select-nav="onSelectNav"
    />
    <LayoutMenu
      class="nav"
      v-if="showState.menu"
      :select-menu="selectMenu"
      :menus="menus"
      @select-menu="onSelectMenu"
    />
    <LayoutBreadcrumb
      class="breadcrumb"
      v-if="showState.breadcrumb"
      :breadcrumb="breadcrumbNavs"
      :select-menu="selectMenu"
      @select-menu="onSelectMenu"
    />
    <LayoutTools class="tool" />
    <LayoutAvatar class="avatar" :avatar="props.avatar" :username="props.username" />
  </div>
</template>

<script setup lang="ts">
  import LayoutTools from './components/LayoutTools.vue';
  import LayoutBreadcrumb from './components/LayoutBreadcrumb.vue';
  import LayoutAvatar from './components/LayoutAvatar.vue';
  import LayoutNav from './components/LayoutNav.vue';
  import LayoutMenu from './components/LayoutMenu.vue';
  import LayoutLogo from './components/LayoutLogo.vue';
  import FlodButton from '/@/layouts/components/FlodButton.vue';
  import { siteConfigStoreHook } from '/@/store/modules/globalConfig';
  import { pageStateStoreHook } from '/@/store/modules/pageState';
  import { permissionStateStoreHook } from '/@/store/modules/permissionState';
  import { storeToRefs } from 'pinia';

  const pageState = pageStateStoreHook();
  const siteConfig = siteConfigStoreHook();
  const permissionState = permissionStateStoreHook();

  const { layout } = storeToRefs(siteConfig);
  const { selectMenu, selectNav, menufold } = storeToRefs(pageState);
  const { menus, rootNavs, breadcrumbNavs } = storeToRefs(permissionState);

  const showState = computed(() => {
    return {
      logo: layout.value === 'horizontal' || layout.value === 'standard',
      i: layout.value === 'column' || layout.value === 'complex' || layout.value === 'portrait',
      breadcrumb:
        layout.value === 'column' || layout.value === 'float' || layout.value === 'portrait',
      nav: layout.value == 'complex',
      menu: layout.value == 'horizontal'
    };
  });

  const props = defineProps<{
    title: string;
    logo: string;
    avatar?: string;
    username?: string;
  }>();

  const onClickFold = () => {
    pageState.$patch({ menufold: !menufold.value });
  };
  const onSelectNav = (path: string) => {
    const menu = permissionState.menuMap[path];
    if (menu.link) {
      window.open(menu.link);
    }
    pageState.setSelectNav(path);
  };
  const onSelectMenu = (path: string) => {
    const menu = permissionState.menuMap[path];
    if (menu.link) {
      window.open(menu.link);
    } else {
      pageState.setSelectMenu(path);
    }
  };
</script>
