<template>
  <el-tree
    :data="data"
    default-expand-all
    :expand-on-click-node="false"
    :props="{ label: 'name' }"
    @node-click="onNodeClick"
  >
    <template #default="{ node }">
      <div class="tree-node">
        <span>{{ node.label }}</span>
        <div class="button">
          <iconify-icon icon="ant-design:edit-outlined" class="edit" @click="emit('edit', node)" />
          <iconify-icon
            icon="ant-design:delete-outlined"
            class="del"
            @click="emit('remove', node)"
          />
        </div>
      </div>
    </template>
  </el-tree>
</template>

<script setup lang="ts">
  import modelApi, { Model } from '/@/api/tool/model';
  import { useHttpFetch } from '/@/hooks/fetch';

  const emit = defineEmits<{
    (e: 'select', value: Model): void;
    (e: 'edit', value: Model): void;
    (e: 'remove', value: Model): void;
  }>();
  const { data } = useHttpFetch<any, Model[]>(modelApi.getAllModel, null, {
    immediate: true
  });
  const onNodeClick = (node) => emit('select', node);
</script>

<style lang="scss" scoped>
  .tree-node {
    display: flex;
    font-size: 14px;
    width: 100%;
    .button {
      margin-left: auto;
      margin-right: 10px;
      .edit {
        color: var(--el-color-primary);
      }
      .del {
        color: var(--el-color-danger);
      }
      .el-icon {
        cursor: pointer;
        margin-right: 5px;
      }
    }
  }
</style>
