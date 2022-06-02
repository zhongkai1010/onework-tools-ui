<template>
  <el-tabs v-model="activeName">
    <el-tab-pane
      v-for="(item, index) in props.tabs"
      :key="index"
      :label="item.name"
      :name="item.name"
    >
      <keep-alive>
        <component :is="item.component"></component>
      </keep-alive>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";


const props = defineProps<{
  tabs: Tab[];
}>();

/**
 * tab
 */
const activeName = ref(props.tabs[0].name);
</script>

<style></style>
