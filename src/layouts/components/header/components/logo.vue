<template>
  <div class="container">
    <a href="/">
      <img :src="logoImg" />
      <span>OneWork Tools UI</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import logoImg from "/@/assets/logo.png";
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
      font-size: 22px;
      text-overflow: ellipsis;
      vertical-align: bottom;
    }
  }
}
</style>
