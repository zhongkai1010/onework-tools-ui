<template>
  <div class="container">
    <a href="/">
      <img :src="props.logo" />
      <span>{{ props.title }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string;
    logo: string;
  }>();
</script>

<style lang="scss" scoped>
  .container {
    img {
      width: 32px;
      display: inline-block;
      vertical-align: middle;
    }

    a {
      span {
        margin-left: 5px;
        overflow: hidden;
        font-size: 20px;
        text-overflow: ellipsis;
        vertical-align: bottom;
      }
    }
  }
</style>
