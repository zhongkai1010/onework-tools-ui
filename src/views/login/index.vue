<template>
  <el-button type="primary" @click="onClickLogin" :loading="loading">
    {{ $t('app.login.loginButton') }}
  </el-button>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { userStateStoreHook } from '/@/store/modules/userState';
  import { permissionStateStoreHook } from '/@/store/modules/permissionState';
  import { siteConfigStoreHook } from '/@/store/modules/globalConfig';
  import { HOME_PAGE } from '/@/router/constant';

  import { getNavRecordRaw, getNavRecordRawMap } from '/@/layouts/utils';
  import commonApi from '/@/api/common';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const loading = ref(false);

  // 已登录，跳转首页

  watchEffect(async () => {
    /**
     * 页面初次加载获取系统配置
     */
    const globalConfig = siteConfigStoreHook();
    const config = await commonApi.getConfig();
    globalConfig.setTitle(config.title);

    /**
     *  用户登录，直接跳转首页
     */
    const userState = userStateStoreHook();
    const { login } = storeToRefs(userState);
    if (login && login.value) {
      router.push(HOME_PAGE.path);
    }
  });

  /**
   * 登录事件
   */
  const onClickLogin = async () => {
    loading.value = true;
    const userState = userStateStoreHook();
    await userState.pwdLogin({ username: '', password: '', vcode: '' });
    await userState.getUserInfo();
    const menus = getNavRecordRaw().filter((t) => t.name.includes('demo'));
    const menuMap = getNavRecordRawMap(menus);
    const permissionState = permissionStateStoreHook();
    permissionState.$patch({ menus, menuMap });
    router.push(HOME_PAGE.path);
    loading.value = false;
  };
</script>

<style lang="scss" scoped></style>
