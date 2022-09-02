<script setup lang="ts">
  import { ElConfigProvider } from 'element-plus';
  import { useLocale } from '/@/locales/useLocale';
  const { elementPlusLocale } = useLocale();

  console.log('init');
</script>

<template>
  <el-config-provider :locale="elementPlusLocale">
    <Suspense>
      <router-view />
    </Suspense>
  </el-config-provider>
</template>
