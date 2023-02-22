<template>
  <div class="main-wrapper">
    <div class="main-container">
      <div class="title-container">
        <img :src="logoImg" />
        <p> 临床研究协调员（CRC）管理系统</p>
      </div>
      <div class="content-container">
        <div class="login">
          <div class="qr">
            <div class="title">微信登录</div>
            <div class="sub-title">请使用<span>微信扫码</span>关注公众号即可安全登录</div>
            <div class="code">
              <img :src="qrImg" alt="二维码失效" />
            </div>
          </div>
          <div class="split"></div>
          <div class="form">
            <div class="tab">
              <a
                :class="{ 'is-active': loginMethod == LoginMethod.Password }"
                @click="onSwitchLoginMethod(LoginMethod.Password)"
              >
                密码登录
              </a>
              <a
                :class="{ 'is-active': loginMethod == LoginMethod.PhoneCode }"
                @click="onSwitchLoginMethod(LoginMethod.PhoneCode)"
              >
                验证码登录
              </a>
            </div>
            <div class="table">
              <el-form>
                <el-form-item>
                  <el-input
                    :prefix-icon="User"
                    class="input"
                    placeholder="请输入用户名/手机号"
                    :v-model="formValue.username"
                  />
                </el-form-item>
                <el-form-item v-show="loginMethod == LoginMethod.Password">
                  <el-input
                    :prefix-icon="Unlock"
                    class="input"
                    placeholder="请输入密码"
                    :v-model="formValue.password"
                  />
                </el-form-item>
                <el-form-item v-show="loginMethod == LoginMethod.Password">
                  <el-input :prefix-icon="Unlock" class="input code" placeholder="请输入验证码" />
                  <img :src="codeImg" class="verify" />
                </el-form-item>
                <el-form-item v-show="loginMethod == LoginMethod.PhoneCode">
                  <el-input
                    :prefix-icon="Unlock"
                    class="input code"
                    v-loading="codeLoading"
                    :placeholder="codeText"
                    :v-model="formValue.phoneCode"
                  />
                  <el-button type="primary" class="pull">获取验证码</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    class="submit"
                    @click="onClickLogin"
                    v-loading="loginLoading"
                    >登录</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
        <div class="protocol">
          <input type="checkbox" />
          <span> 我阅读并同意<a>《用户协议及隐私协议》</a></span>
        </div>
      </div>
    </div>
    <div class="copyright-container">Copyright © 2023 北京中兴正远科技有限公司</div>
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
  import logoImg from '/@/assets/login/logo.png';
  import qrImg from '/@/assets/login/qr.jpg';
  import codeImg from '/@/assets/login/code.gif';
  import { User, Unlock } from '@element-plus/icons-vue';

  enum LoginMethod {
    Password,
    PhoneCode
  }
  const loginLoading = ref(false);
  const codeLoading = ref(false);
  const codeText = ref('获取短信验证码');
  const router = useRouter();

  const loginMethod = ref(LoginMethod.Password);

  const formValue = reactive({
    username: '',
    password: '',
    validateCode: '',
    phoneCode: '',
    remember: false
  });

  /**
   * 登录事件
   */
  const onClickLogin = async () => {
    loginLoading.value = true;
    const userState = userStateStoreHook();
    await userState.userLogin({ username: '', password: '', vcode: '' });
    await userState.getUserInfo();
    const menus = getNavRecordRaw();
    const menuMap = getNavRecordRawMap(menus);
    const permissionState = permissionStateStoreHook();
    permissionState.$patch({ menus, menuMap });
    router.push(HOME_PAGE.path);
    loginLoading.value = false;
  };

  const onSwitchLoginMethod = (method: LoginMethod) => {
    // 登录中无法切换
    if (!loginLoading.value) {
      loginMethod.value = method;
    }
  };

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
</script>

<style lang="scss" scoped>
  .main-wrapper {
    background: url('/@/assets/login/bg.png') no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .main-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title-container {
        display: flex;
        margin-bottom: 30px;
        text-align: center;

        p {
          font-family: 'Microsoft YaHei-Bold';
          color: #fff;
          font-size: 42px;
          font-weight: 600;
        }
        img {
          width: 61px;
          height: 64px;
          margin-right: 10px;
          position: relative;
          top: 5px;
        }
      }

      .content-container {
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        padding: 70px 70px 40px 70px;
        .login {
          display: flex;

          .qr {
            display: flex;
            flex-direction: column;
            align-items: center;

            .title {
              font-size: 20px;
              font-weight: 400;
              color: #666666;
              font-family: Microsoft YaHei-Regular, Microsoft YaHei;
              margin-bottom: 20px;
            }
            .sub-title {
              font-size: 16px;
              font-family: Microsoft YaHei-Regular, Microsoft YaHei;
              font-weight: 400;
              color: #666666;
              margin-bottom: 10px;
              span {
                color: #408cff;
              }
            }
            .code {
              width: 303px;
              height: 294px;
              background: #ffffff;
              border-radius: 10px;
              padding: 10px;
              border: 1px solid #c3c3c3;
            }
          }
          .split {
            border-left: 1px solid #c3c3c3;
            margin: 0px 5px;
            height: 90%;
            margin-top: auto;
            margin-left: 67px;
            margin-right: 53px;
            border-collapse: collapse;
          }
          .form {
            .tab {
              display: flex;
              margin-bottom: 60px;
              a {
                padding: 8px;
                font-size: 18px;
                font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                font-weight: 400;
                margin-right: 100px;
                color: #333333;
              }

              .is-active {
                border-bottom: 2px solid #408cff;
              }
            }
            .table {
              .input {
                width: 420px;
                height: 40px;
                border-radius: 2px;
                &:deep(.el-input__wrapper) {
                  background-color: #f8f8f8;
                }
                &.code {
                  width: 280px;
                  margin-right: 2px;
                }
              }
              .verify {
                width: 136px;
                height: 40px;
              }
              .pull {
                width: 136px;
                height: 40px;
                border-radius: 0px;
              }
              .submit {
                width: 420px;
                height: 40px;
                background: #408cff;
                box-shadow: 0px 3px 9px 1px rgba(2, 80, 197, 0.33);
                border-radius: 2px 2px 2px 2px;
                opacity: 1;
              }
            }
          }
        }

        .protocol {
          margin-top: 30px;
          a {
            color: #408cff;
          }
        }
      }
    }
    .copyright-container {
      color: #fff;
      bottom: 40px;
      position: absolute;
    }
  }
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
