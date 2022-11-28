<template>
  <div class="form_wrapper">
    <img :src="logoImg" />
    <h2>OneWork Tools UI</h2>
    <form>
      <el-form-item>
        <el-input v-model="formValue.username" clearable>
          <template #prefix>
            <IconifyIcon icon="ant-design:user-outlined" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formValue.password" type="password" clearable show-password>
          <template #prefix>
            <IconifyIcon icon="ant-design:lock-filled" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formValue.validateCode" clearable>
          <template #prefix>
            <IconifyIcon icon="ant-design:security-scan-filled" />
          </template>
          <template #append>
            <canvas width="120" height="40" class="cursor-pointer"></canvas>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-checkbox label="记住密码" v-model="formValue.remember" />
        <el-button link>忘记密码？</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onClickLogin" :loading="loading" style="width: 100%">
          {{ $t('app.login.loginButton') }}
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-space>
          <el-button>手机登录</el-button>
          <el-button>二维码登录</el-button>
          <el-button>注册</el-button>
        </el-space>
      </el-form-item>
      <el-form-item>
        <el-divider content-position="left">第三方登录</el-divider>
        <el-space>
          <IconifyIcon icon="ant-design:lock-filled" />
          <IconifyIcon icon="ant-design:lock-filled" />
          <IconifyIcon icon="ant-design:lock-filled" />
          <IconifyIcon icon="ant-design:lock-filled" />
        </el-space>
      </el-form-item>
    </form>
  </div>
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
  import logoImg from '/@/assets/logo.png';

  const router = useRouter();
  const loading = ref(false);

  const formValue = reactive({
    username: '',
    password: '',
    validateCode: '',
    remember: false
  });

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
    const menus = getNavRecordRaw();
    const menuMap = getNavRecordRawMap(menus);
    const permissionState = permissionStateStoreHook();
    permissionState.$patch({ menus, menuMap });
    router.push(HOME_PAGE.path);
    loading.value = false;
  };
</script>

<style lang="scss" scoped>
  .form_wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #fff;
    width: 460px;
    margin-left: 40%;
    padding: 20px;
    img {
      height: 80px;
      align-items: center;
    }
    h2 {
      color: #999;
      font: 700 200% Consolas, Monaco, monospace;
      margin: 15px 0;
      text-transform: uppercase;
    }
  }
</style>
