<template>
  <div class="wrapper" :data-layout="layout" v-loading="reloading">
    <el-container>
      <el-header v-if="horizontal" class="wrapper_header">
        <layout-header
          :title="title ?? DEFAULT_TITLE"
          :logo="logo ?? logoImg"
          :avatar="avatar ?? defaultAvatar"
          :username="displayName"
        /> 
      </el-header>
      <el-container>
        <el-aside v-if="layout !== 'horizontal'" class="wrapper_left">
          <layout-sidebar :title="title ?? DEFAULT_TITLE" :logo="logo ?? logoImg" />
        </el-aside>
        <el-container>
          <el-header class="wrapper_nav">
            <layout-header
              v-if="!horizontal"
              :title="title ?? DEFAULT_TITLE"
              :logo="logo ?? logoImg"
              :avatar="avatar ?? defaultAvatar"
              :username="displayName"
            />
            <layout-tabs v-if="showTabs" />
          </el-header>
          <el-main class="wrapper_body">
            <router-view v-slot="{ Component, route }">
              <frame-view
                :src="nav.frameSrc"
                v-for="(nav, index) in iframeNavs"
                :key="index"
                v-show="nav.path === route.path"
              />
              <keep-alive :include="cacheNames">
                <component
                  :is="Component"
                  :key="$route.name"
                  v-if="$route.meta.keepAlive && !$route.meta.frameSrc && !routerLoading"
                />
              </keep-alive>

              <component
                :is="Component"
                :key="$route.name"
                v-if="!$route.meta.keepAlive && !$route.meta.frameSrc && !routerLoading"
              />
            </router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
    <tab-tools />
    <config-drawer />
    <lock-screen v-if="siteConfig.lock" :avatar="logoImg" />
    <div class="guild-container" ref="el" :style="style"></div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useDraggable, useWindowSize } from '@vueuse/core';
  import LayoutHeader from '/@/layouts/components/header/index.vue';
  import LayoutSidebar from '/@/layouts/components/sidebar/index.vue';
  import LayoutTabs from '/@/layouts/components/tabs/index.vue';
  import ConfigDrawer from '/@/layouts/components/setting/ConfigDrawer.vue';
  import TabTools from '/@/layouts/components/tabs/TabTools.vue';
  import LockScreen from '/@/layouts/components/LockScreen.vue';

  import { siteConfigStoreHook } from '/@/store/modules/globalConfig';
  import { pageStateStoreHook } from '/@/store/modules/pageState';
  import { permissionStateStoreHook } from '/@/store/modules/permissionState';
  import { userStateStoreHook } from '/@/store/modules/userState';
  import { themeStateStoreHook } from '/@/store/modules/themeState';

  import { DEFAULT_TITLE } from '/@/settings/constant';
  import { router } from '/@/router';
  import { HOME_PAGE } from '/@/router/constant';
  import logoImg from '/@/assets/logo.png';
  import defaultAvatar from '/@/assets/logo.png';
  import '/@/styles/layout.scss';

  const pageState = pageStateStoreHook();
  const siteConfig = siteConfigStoreHook();
  const permissionState = permissionStateStoreHook();
  const userState = userStateStoreHook();

  const { layout, showTabs, title, logo } = storeToRefs(siteConfig);
  const { routerLoading, cacheNames, reloading } = storeToRefs(pageState);
  const { iframeNavs } = storeToRefs(permissionState);
  const { login, displayName, avatar } = storeToRefs(userState);

  const { width, height } = useWindowSize();
  const el = ref(null);
  const { style } = useDraggable(el, {
    initialValue: { x: width.value - 100, y: height.value - 100 }
  });

  watch(login, () => {
    if (!login.value) {
      router.push(HOME_PAGE.path);
    }
  });

  const horizontal = computed(() => {
    return layout.value === 'horizontal' || layout.value === 'standard';
  });
  const cassVariables = computed(() => {
    const cssVariables = pageStateStoreHook().dynamicCssVariables;
    const themeVariables = themeStateStoreHook().themeVariables;
    return {
      ...cssVariables,
      ...themeVariables
    };
  });
  const setCssVariable = (values: Recordable<string>) => {
    const rootStyle = window.document.documentElement.style;
    Object.keys(values).forEach((t) => {
      rootStyle.setProperty(t, values[t]);
    });
  };
  setCssVariable(unref(cassVariables));
  watch(cassVariables, () => {
    const values = unref(cassVariables);
    setCssVariable(values);
  });

  // if (siteConfig.showTabs && pageState.selectTab) {
  //   router.push(pageState.selectTab);
  // }
</script>

<style lang="scss" scoped>
  .guild-container {
    cursor: pointer;
    position: fixed;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: aquamarine;
    right: 20px;
    bottom: 20px;
    z-index: 9999;
  }
</style>
