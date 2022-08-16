<template>
  <div class="lock-container">
    <div class="content">
      <el-avatar :size="200" :src="props.avatar" />
      <IconifyIcon icon="bx:lock" />
      <span class="form">
        <el-input type="password" v-model="password" />
        <el-button type="primary" @click="onClickLock">{{ t('comp.layout.unlock') }}</el-button>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { siteConfigStoreHook } from '/@/store/modules/globalConfig';
  import { t } from '/@/hooks/web/useI18n';

  const siteConfig = siteConfigStoreHook();

  const password = ref('');

  const props = defineProps<{
    avatar?: string;
  }>();

  const onClickLock = () => {
    siteConfig.$patch({ lock: false });
  };
</script>

<style lang="scss" scoped>
  .lock-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1999;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    background-color: hsla(0, 0%, 100%, 0.6);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s, color 0.1s, font-size 0s;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    .content {
      z-index: 1999;
      padding: 40px 95px 40px 95px;
      color: #252a30;
      text-align: center;
      background: hsla(0, 0%, 100%, 0.6);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      border-radius: 15px;

      .form {
        display: flex;
      }
    }
  }
</style>
