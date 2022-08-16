<template>
  <div class="sidebar-container" :class="{ fold: menufold }">
    <div v-if="layout == 'column'" class="left">
      <layout-logo :logo="props.logo" state="logo" />
      <layout-nav class="nav" :navs="rootNavs" :select-nav="selectNav" @select-nav="onSelectNav" />
    </div>
    <div class="right">
      <layout-logo
        v-if="layout !== 'standard'"
        :title="props.title"
        :logo="props.logo"
        :state="logoState"
        class="logo"
      />
      <el-divider class="divider" content-position="center" v-if="layout == 'column'">
        {{ menuMap[selectMenu] ? menuMap[selectMenu].title : '' }}
      </el-divider>
      <layout-menu
        class="menu"
        :menufold="sidebarMenufold"
        :select-menu="selectMenu"
        :menus="navMesnus"
        @select-nav="onSelectMenu"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import LayoutMenu from './components/LayoutMenu.vue';
  import LayoutNav from './components/LayoutNav.vue';
  import LayoutLogo from './components/LayoutLogo.vue';
  import { siteConfigStoreHook } from '/@/store/modules/globalConfig';
  import { pageStateStoreHook } from '/@/store/modules/pageState';
  import { permissionStateStoreHook } from '/@/store/modules/permissionState';
  import { storeToRefs } from 'pinia';

  const pageState = pageStateStoreHook();
  const siteConfig = siteConfigStoreHook();
  const permissionState = permissionStateStoreHook();

  const { layout } = storeToRefs(siteConfig);
  const { selectMenu, selectNav, menufold } = storeToRefs(pageState);
  const { menus, rootNavs, menuMap } = storeToRefs(permissionState);

  const props = defineProps<{
    title: string;
    logo: string;
  }>();

  const sidebarMenufold = computed(() => {
    if (layout.value === 'float') {
      return true;
    } else {
      return menufold.value;
    }
  });

  const logoState = computed(() => {
    if (layout.value == 'float' || menufold.value) {
      return 'logo';
    } else {
      return layout.value === 'column' ? 'title' : 'all';
    }
  });

  const navMesnus = computed(() => {
    if (layout.value === 'complex' || layout.value === 'column') {
      const menu = menus.value.find((t) => t.path === selectNav.value);
      if (menu) {
        return menu.children || [];
      }
    }
    return menus.value;
  });

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
