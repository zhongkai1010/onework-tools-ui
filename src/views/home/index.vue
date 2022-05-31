<template>
    Home Index
    <router-link to="/user" text="用户" />
    <router-link to="/role" text="角色" />
    <HelloWorld msg="sample" />
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'

</script>

<style lang="scss" scoped>
</style>
