<template>
  <div class="wrapper" :data-layout="layout" v-loading="reloading">
    <el-container>
      <el-header v-if="horizontal" class="wrapper_header">
        <LayoutHeader
          :title="title ?? DEFAULT_TITLE"
          :logo="logo ?? logoImg"
          :avatar="currentUser.avatar ?? defaultAvatar"
          :username="currentUser.displayName"
        />
      </el-header>
      <el-container>
        <el-aside v-if="layout !== 'horizontal'" class="wrapper_left">
          <LayoutSidebar :title="title ?? DEFAULT_TITLE" :logo="logo ?? logoImg" />
        </el-aside>
        <el-container>
          <el-header class="wrapper_nav">
            <LayoutHeader
              v-if="!horizontal"
              :title="title ?? DEFAULT_TITLE"
              :logo="logo ?? logoImg"
              :avatar="currentUser.avatar ?? defaultAvatar"
              :username="currentUser.displayName"
            />
            <LayoutTabs v-if="showTabs" />
          </el-header>
          <el-main class="wrapper_body">
            <router-view v-slot="{ Component, route }">
              <PageFrame
                :src="nav.frameSrc"
                v-for="(nav, index) in iframeNavs"
                :key="index"
                v-show="nav.path === route.path"
              />
              <KeepAlive :include="cacheNames">
                <component
                  :is="Component"
                  :key="$route.name"
                  v-if="$route.meta.keepAlive && !$route.meta.frameSrc && !routerLoading"
                />
              </KeepAlive>

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
    <!--用户下拉菜单面板-->
    <TabTools />
    <!--配置面版-->
    <ConfigDrawer />
    <!--锁屏遮罩层-->
    <LockScreen v-if="siteConfig.lock" :avatar="logoImg" />
    <!--拖拽小工具-->
    <div class="guild-container" ref="el" :style="style"></div>
  </div>
</template>

<script lang="ts" setup>
  import { useDraggable, useWindowSize } from '@vueuse/core';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import LayoutHeader from '/@/layouts/components/header/index.vue';
  import LockScreen from '/@/layouts/components/LockScreen.vue';
  import ConfigDrawer from '/@/layouts/components/setting/ConfigDrawer.vue';
  import LayoutSidebar from '/@/layouts/components/sidebar/index.vue';
  import LayoutTabs from '/@/layouts/components/tabs/index.vue';
  import TabTools from '/@/layouts/components/tabs/TabTools.vue';
  import { PageFrame } from '/@/components/Page';

  import { siteConfigStoreHook } from '/@/store/modules/globalConfig';
  import { pageStateStoreHook } from '/@/store/modules/pageState';
  import { permissionStateStoreHook } from '/@/store/modules/permissionState';
  import { themeStateStoreHook } from '/@/store/modules/themeState';
  import { userStateStoreHook } from '/@/store/modules/userState';

  import { default as defaultAvatar, default as logoImg } from '/@/assets/logo.png';
  import { router } from '/@/router';
  import { HOME_PAGE } from '/@/router/constant';
  import { DEFAULT_TITLE } from '/@/settings/constant';
  import '/@/style/layout.scss';

  const pageState = pageStateStoreHook();
  const siteConfig = siteConfigStoreHook();
  const permissionState = permissionStateStoreHook();
  const userState = userStateStoreHook();

  const { layout, showTabs, title, logo } = storeToRefs(siteConfig);
  const { routerLoading, cacheNames, reloading } = storeToRefs(pageState);
  const { iframeNavs } = storeToRefs(permissionState);
  const { login, currentUser } = storeToRefs(userState);

  /**
   *  拖拽小工具
   */
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

  /**
   * 生成主题样式变量
   */
  const setCssVariable = (values: Recordable<string>) => {
    const rootStyle = window.document.documentElement.style;
    Object.keys(values).forEach((t) => {
      rootStyle.setProperty(t, values[t]);
    });
  };
  setCssVariable(unref(cassVariables));
  /**
   * 主题样式变量变化
   */
  watch(cassVariables, () => {
    const values = unref(cassVariables);
    setCssVariable(values);
  });
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
