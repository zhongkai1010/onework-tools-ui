<template>
  <a class="logo" href="/">
    <img :src="props.logo" />
    <span class="title">{{ props.title }}</span>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  logo: string;
  title: string;
}>();
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  margin-right: 40px;
  img {
    margin: auto;
    height: 32px;
  }
}
.title {
  display: inline-block;
  overflow: hidden;
  margin-left: 5px;
  font-size: 20px;
  text-overflow: ellipsis;
  color: #515a6e !important;
  line-height: 60px;
  width: 200px;
}
</style>
