<template>
  <div class="ow-wrapper">
    <template v-if="layout === 'column'">
      <ColumnLayout />
    </template>
    <template v-else-if="layout === 'horizontal'">
      <HorizontalLayout />
    </template>
    <template v-else-if="layout === 'complex'">
      <ComplexLayout />
    </template>
    <template v-else-if="layout === 'float'">
      <FloatLayout />
    </template>
    <template v-else-if="layout === 'portrait'">
      <PortraitLayout />
    </template>
    <template v-else>
      <StandardLayout />
    </template>
    <Setting />
  </div>
  <config-drawer />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import ColumnLayout from "/@/layouts/column.vue";
import HorizontalLayout from "/@/layouts/horizontal.vue";
import ComplexLayout from "/@/layouts/complex.vue";
import FloatLayout from "/@/layouts/float.vue";
import PortraitLayout from "/@/layouts/portrait.vue";
import StandardLayout from "/@/layouts/standard.vue";
import Setting from "/@/layouts/components/setting/index.vue";
import ConfigDrawer from "/@/layouts/components/setting/ConfigDrawer.vue";
const layout = computed(() => siteConfigStoreHook().layout);
</script>

<style lang="scss" scoped>
.ow-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
