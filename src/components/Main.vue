<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="User" name="first">first</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";

/**
 * tab
 */
const activeName = ref("first");
</script>

<style></style>
