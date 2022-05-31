<template>
     User is
     <router-link to="/">首页</router-link>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, toRaw } from 'vue'

const route = useRoute()
onMounted(() => {
  // 打印
  console.log('route:', toRaw(route).query.value)
})

</script>

<style scoped>

</style>
