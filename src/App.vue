<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";

import { siteConfigStoreHook } from "/@/store/globalConfig";
import { computed } from "vue";
const locale = computed(() => siteConfigStoreHook().locale);
</script>

<template>
  <el-config-provider :locale="locale == 'zh-CN' ? zhCn : en">
    <router-view />
  </el-config-provider>
</template>
