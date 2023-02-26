<template>
  <el-config-provider :locale="elementPlusLocale">
    <Suspense>
      <router-view />
    </Suspense>
  </el-config-provider>
</template>

<script setup lang="ts">
  import { ElConfigProvider } from 'element-plus';
  import { useLocale } from '/@/locales/useLocale';
  import { useAppStoreWithOut } from '/@/store/modules/app';
  import projectSetting from '/@/settings/projectSetting';
  const { elementPlusLocale } = useLocale();
  const useAppStore = useAppStoreWithOut();
  useAppStore.setProjectConfig(projectSetting);
</script>
