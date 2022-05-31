<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  name: "app",
  setup() {
    onMounted(() => {
      console.log("组件挂载");
    });
  },
});
</script>
