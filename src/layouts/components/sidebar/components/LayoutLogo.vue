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
  const props = defineProps<{
    logo?: string;
    title?: string;
    state: 'logo' | 'title' | 'all';
  }>();
</script>

<style lang="scss" scoped>
  .container {
    text-align: center;

    &.is-logo {
      width: $layout-sidebar-fold-width;
      height: $layout-header-height;
      padding: 16px;

      img {
        width: 32px;
      }

      .text {
        display: none;
      }
    }

    &.is-title {
      width: var(--layout-sidebar-menu-width);
      height: $layout-header-height;

      .img {
        display: none;
      }

      .text {
        line-height: $layout-header-height;
        overflow: hidden;
        font-size: 20px;
        padding-right: 15px;
        padding-left: 15px;
        text-overflow: ellipsis;
        vertical-align: bottom;
      }
    }

    &.is-all {
      width: var(--layout-sidebar-menu-width);
      height: $layout-header-height;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;

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
