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
            <div class="code" @click="onRefreshWinXinQR" v-loading="winXinLoading">
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
              <el-form ref="formRef" :model="formValue">
                <template v-if="isPwdLogin">
                  <el-form-item
                    prop="username"
                    :rules="[{ required: true, message: '请输入用户名' }]"
                  >
                    <el-input
                      ref="userRef"
                      :prefix-icon="User"
                      v-model="formValue.username"
                      class="input"
                      placeholder="请输入用户名"
                      :autofocus="isPwdLogin"
                    />
                  </el-form-item>
                  <el-form-item
                    prop="password"
                    :rules="[{ required: true, message: '请输入密码' }]"
                  >
                    <el-input
                      :prefix-icon="Unlock"
                      class="input"
                      v-model="formValue.password"
                      placeholder="请输入密码"
                      type="password"
                    />
                  </el-form-item>
                  <el-form-item
                    prop="captcha"
                    :rules="[{ required: true, message: '请输入验证码' }]"
                  >
                    <el-input
                      :prefix-icon="Unlock"
                      v-model="formValue.captcha"
                      class="input code"
                      placeholder="请输入验证码"
                    />
                    <div class="captcha" @click="onRefreshCaptcha" v-loading="captchaLoading">
                      <img :src="captchaImg" />
                    </div>
                  </el-form-item>
                </template>
                <template v-if="!isPwdLogin">
                  <el-form-item
                    prop="phone"
                    :rules="[
                      { required: true, message: '请输入手机号' },
                      {
                        pattern: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/,
                        message: '请输入正确的手机号'
                      }
                    ]"
                  >
                    <el-input
                      v-model="formValue.phone"
                      ref="phoneRef"
                      :prefix-icon="User"
                      class="input"
                      placeholder="请输入手机号"
                    />
                  </el-form-item>
                  <el-form-item
                    prop="phoneCode"
                    v-model="formValue.phoneCode"
                    :rules="[{ required: true, message: '请输入短信验证码' }]"
                  >
                    <el-input
                      :prefix-icon="Unlock"
                      class="input code"
                      v-loading="captchaLoading"
                      v-model="formValue.phoneCode"
                      placeholder="请填写短信验证码"
                    />
                    <el-button
                      type="primary"
                      :disabled="smsLoading"
                      class="pull"
                      @click="onSendPhoneCode(formRef)"
                      >{{ smsText }}</el-button
                    >
                  </el-form-item>
                </template>

                <el-form-item>
                  <el-button
                    type="primary"
                    class="submit"
                    @click="onClickLogin(formRef)"
                    v-loading="loginLoading"
                    >登录</el-button
                  >
                </el-form-item>
              </el-form>
              <div class="error" v-show="showError"> {{ errorMessage }}</div>
            </div>
          </div>
        </div>
        <div class="protocol">
          <input type="checkbox" v-model="protocol" />
          <span> 我阅读并同意<a>《用户协议及隐私协议》</a></span>
        </div>
      </div>
    </div>
    <div class="copyright-container">Copyright © 2023 北京中兴正远科技有限公司</div>
  </div>
</template>

<script setup lang="ts">
  import { Unlock, User } from '@element-plus/icons-vue';

  import { ElInput, ElMessageBox, FormInstance } from 'element-plus';

  import logoImg from '/@/assets/login/logo.png';
  import qrImg from '/@/assets/login/qr.jpg';
  import captchaImg from '/@/assets/login/code.gif';

  import { useUserStoreWithOut } from '/@/store/modules/user';

  enum LoginMethod {
    Password,
    PhoneCode
  }
  const loginLoading = ref(false);
  const captchaLoading = ref(false);
  const winXinLoading = ref(false);
  const smsLoading = ref(false);
  const protocol = ref(false);
  const smsCount = ref<number>(60);
  const smsText = ref<string>('获取验证码');
  const isSendSMS = ref(false);
  const showError = ref(false);
  const errorMessage = ref('');

  const phoneRef = ref();
  const userRef = ref();

  const loginMethod = ref(LoginMethod.Password);
  const formRef = ref<FormInstance>();
  const userStore = useUserStoreWithOut();

  const isPwdLogin = computed(() => loginMethod.value == LoginMethod.Password);

  const formValue = reactive({
    username: '',
    password: '',
    captcha: '',
    phone: '',
    phoneCode: ''
  });

  /**
   * 登录事件
   */
  const onClickLogin = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;

    if (!protocol.value) {
      ElMessageBox.alert('请阅读同意《用户协议及隐私协议》', '提示', {
        confirmButtonText: '确定',
        callback: () => {
          protocol.value = true;
          if (userRef.value) {
            userRef.value.focus();
          }
          if (phoneRef.value) {
            phoneRef.value.focus();
          }
        }
      });
      return;
    }
    await formEl.validate(async (valid) => {
      if (valid) {
        loginLoading.value = true;
        try {
          const userInfo = await userStore.login({
            username: formValue.username,
            password: formValue.password,
            mode: 'none'
          });
          loginLoading.value = true;
          console.log(userInfo);
        } catch (ex) {
          loginLoading.value = false;
          showError.value = true;
          errorMessage.value = ex as string;
        }
      } else {
        if (userRef.value) {
          userRef.value.focus();
        }
        if (phoneRef.value) {
          phoneRef.value.focus();
        }
      }
    });
  };

  /**
   * 切换登录方式
   */
  const onSwitchLoginMethod = (method: LoginMethod) => {
    showError.value = false;
    errorMessage.value = '';

    // 登录中无法切换
    if (!loginLoading.value) {
      loginMethod.value = method;
    }
    if (method === LoginMethod.Password) {
      console.log('userRef', userRef.value);
      setTimeout(() => {
        userRef.value.focus();
      }, 500);
    } else {
      setTimeout(() => {
        phoneRef.value.focus();
      }, 500);
    }
  };

  /**
   * 点击刷新图像验证码
   */
  const onRefreshCaptcha = () => {
    captchaLoading.value = true;
    setTimeout(() => {
      captchaLoading.value = false;
    }, 1000);
  };

  /**
   *  点击刷新微信公众号二维码
   */
  const onRefreshWinXinQR = () => {
    winXinLoading.value = true;
    setTimeout(() => {
      winXinLoading.value = false;
    }, 1000);
  };

  /**
   * 获取短信验证码
   */
  const onSendPhoneCode = (formEl: FormInstance | undefined) => {
    // 设置已发送短信
    isSendSMS.value = true;
    if (smsLoading.value) {
      return;
    }
    if (!protocol.value) {
      ElMessageBox.alert('请阅读同意《用户协议及隐私协议》', '提示', {
        // if you want to disable its autofocus
        // autofocus: false,
        confirmButtonText: '确定',
        callback: () => {
          protocol.value = true;
          phoneRef.value.focus();
        }
      });
      return;
    }
    if (formEl) {
      formEl.validateField('phone', (isValid) => {
        if (isValid) {
          smsLoading.value = true;
          const clearState = setInterval(() => {
            if (smsCount.value == 0) {
              smsCount.value = 60;
              smsLoading.value = false;
              smsText.value = isSendSMS.value ? '重新获取' : '获取短信';
              clearInterval(clearState);
            } else {
              smsCount.value = smsCount.value - 1;
              smsText.value = `${smsCount.value.toString()}秒后重发`;
            }
          }, 1000);
        } else {
          phoneRef.value.focus();
        }
      });
    }
  };
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
              cursor: pointer;
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
              .captcha {
                cursor: pointer;
                img {
                  width: 136px;
                  height: 40px;
                }
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
            .error {
              color: var(--el-color-danger);
              font-size: 12px;
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
