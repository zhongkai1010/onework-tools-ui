<template>
  <el-tree
    :data="treeData"
    default-expand-all
    highlight-current
    @node-click="onSelect"
    node-key="id"
  >
    <template #default="{ node }">
      <div class="tree-node" :class="{ 'is-select': node.data.id == selectNodeKey }">
        <span :title="`${node.data.label}(${node.data.name})`">{{ node.label }}</span>
        <div class="button" v-if="node.data.id !== 'root'">
          <iconify-icon
            icon="ant-design:edit-outlined"
            class="edit"
            @click="onClickEdit(node.data)"
          />
          <iconify-icon
            icon="ant-design:delete-outlined"
            class="del"
            @click="onClickRemove(node.data)"
          />
        </div>
      </div>
    </template>
  </el-tree>
</template>

<script setup lang="ts">
  import { Model } from '/@/api/tool/model';
  // import { log } from '/@/utils/log';
  import { useMessage } from '/@/hooks/web/useMessage';
  interface Props {
    data: Model[];
  }

  interface TreeNode extends Partial<Model> {
    label: string;
    children: TreeNode[];
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'select', value: Model): void;
    (e: 'edit', value: Model): void;
    (e: 'remove', value: Model): string;
  }>();

  const selectNodeKey = ref('');

  const { confirm } = useMessage();
  const treeData = computed<TreeNode[]>(() => {
    const root: TreeNode = {
      id: 'root',
      label: '所有模型',
      children: props.data.map((t) => {
        return { ...t, label: t.displayName } as TreeNode;
      })
    };
    return [root];
  });

  const onSelect = (node) => {
    if (node.id !== 'root') {
      emit('select', node);
      selectNodeKey.value = node.id;
    }
  };
  const onClickEdit = (value) => emit('edit', value);
  const onClickRemove = (value) => {
    confirm('确认是否删除！').then(() => {
      emit('remove', value);
    });
  };
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
  .is-select {
    color: var(--el-color-primary);
  }
</style>
