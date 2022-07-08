<template>
  <div class="ow-wrapper">
    <template v-if="layout === 'column'">
      <ColumnLayout />
    </template>
    <template v-if="layout === 'horizontal'">
      <HorizontalLayout />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import ColumnLayout from "/@/layouts/column.vue";
import HorizontalLayout from "/@/layouts/horizontal.vue";
import { getModuleRoutes } from "/@/router/utils";

const layout = computed(() => siteConfigStoreHook().layout);

console.log(getModuleRoutes());
</script>

<style lang="scss" scoped>
.ow-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $body-background;
}
</style>
