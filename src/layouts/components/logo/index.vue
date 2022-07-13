<template>
  <div :class="props.fold ? 'container fold' : 'container'">
    <a href="/">
      <span class="logo">
        <img :src="props.logo" />
      </span>
      <span class="title">{{ props.title }}</span>
    </a>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  logo: string;
  title: string;
  fold?: boolean;
}>();
</script>

<style lang="scss" scoped>
.container {
  background-color: $header-color;
  color: $header-font-color;

  a {
    display: flex;
    align-items: center;
    height: $header-height;
  }
  .logo {
    width: $logo-width;

    padding: 0 16px;
    box-sizing: border-box;
    img {
      width: 32px;
    }
  }
  .title {
    display: inline-block;
    overflow: hidden;
    margin-left: 5px;
    font-size: 20px;
    text-overflow: ellipsis;
  }
}
.fold {
  .title {
    display: none;
  }
}
</style>
