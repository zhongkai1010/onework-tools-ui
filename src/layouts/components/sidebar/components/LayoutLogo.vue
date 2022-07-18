<template>
  <div class="container" :class="`is-${state}`">
    <a href="/">
      <span v-if="props.logo" class="img">
        <img :src="props.logo" />
      </span>
      <span v-if="props.title" class="text">{{ props.title }}</span>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { siteConfigStoreHook } from "/@/store/globalConfig";
const menuWidth = computed(() => `${siteConfigStoreHook().menuWidth}px`);
const titleLineHeight = computed(
  () => `${siteConfigStoreHook().layout === "column" ? "50" : "60"}px`
);
const props = defineProps<{
  logo?: string;
  title?: string;
  state: "logo" | "title" | "all";
}>();
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  &.is-logo {
    color: $nav-color;
    background-color: $nav-background;
    width: $logo-width;
    height: $header-height;
    padding: 16px;
    img {
      width: 32px;
    }
    .text {
      display: none;
    }
  }
  &.is-title {
    width: v-bind(menuWidth);
    height: v-bind(titleLineHeight);
    color: $header-color;
    background-color: $header-background-color;
    .img {
      display: none;
    }
    .text {
      line-height: $header-height;
      overflow: hidden;
      font-size: 20px;
      padding-right: 15px;
      padding-left: 15px;
      text-overflow: ellipsis;
      vertical-align: bottom;
    }
  }
  &.is-all {
    width: v-bind(menuWidth);
    height: $header-height;
    color: $header-color;
    background-color: $header-background-color;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      span {
        margin-left: 5px;
        overflow: hidden;
        font-size: 22px;
        text-overflow: ellipsis;
        vertical-align: bottom;
      }
    }
    img {
      width: 32px;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
