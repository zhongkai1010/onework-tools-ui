<template>
  <card-view :left="true">
    <template #left>
      <el-button type="primary">文本框</el-button>
    </template>
    <draggable :list="list" item-key="name" class="list-group" ghost-class="ghost">
      <template #item="{ element }">
        {{ element.name }}
      </template>
    </draggable>
  </card-view>
</template>

<script lang="ts" setup>
  import draggable from 'vuedraggable';
  const list = ref([]);
</script>
