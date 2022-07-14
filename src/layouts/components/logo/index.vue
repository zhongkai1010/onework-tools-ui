<template>
  <div class="container" :class="{ fold: props.fold, column: props.column }">
    <a href="/">
      <IconifyIcon icon="ri:vuejs-fill" class="logo" :size="32" />
      <!-- <span class="logo">
        <img :src="props.logo" />
      </span> -->
      <span class="title">{{ props.title }}</span>
    </a>
  </div>
</template>

<script lang="ts" setup>
import IconifyIcon from "/@/components/OwIcon/src/iconifyIcon.vue";
const props = defineProps<{
  logo: string;
  title: string;
  fold?: boolean;
  column?: boolean;
}>();
</script>

<style lang="scss" scoped>
.container {
  background-color: $header-background-color;
  color: $header-color;
  a {
    display: flex;
    align-items: center;
  }
  .logo {
    height: $header-height;
    width: $logo-width;
    box-sizing: border-box;
    background-color: $logo-background;
    color: $logo-color;
    img {
      width: 32px;
    }
  }
  .title {
    display: inline-block;
    overflow: hidden;
    font-size: 20px;
    text-overflow: ellipsis;
    line-height: $header-height;
    background-color: $title-background;
    color: $title-color;
  }
}
.column {
  .logo {
  }
  .title {
  }
}
.fold {
  .title {
    display: none;
  }
}
</style>
