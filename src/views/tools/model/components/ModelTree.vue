<!--
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-13 17:43:27
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-20 17:16:55
 * @FilePath: \onework-tools-ui\src\views\tools\model\components\ModelTree.vue
 * @Description:
-->
<template>
  <el-tree
    :data="models"
    highlight-current
    @node-click="onSelect"
    :default-expanded-keys="expandedKeys"
    node-key="id"
    :props="{ label: 'displayName' }"
    v-loading="deleteModelFetch.isFetching.value"
  >
    <template #default="{ node }">
      <div class="tree-node" :class="{ 'is-select': node.data.id == selectNodeKey }">
        <span :title="`${node.data.label}(${node.data.name})`">{{ node.label }}</span>
        <div class="button" v-if="node.isLeaf">
          <iconify-icon
            icon="ant-design:edit-outlined"
            class="edit"
            @click.stop="onClickEdit(node.data)"
          />
          <iconify-icon
            icon="ant-design:delete-outlined"
            class="del"
            @click.stop="onClickRemove(node.data)"
          />
        </div>
      </div>
    </template>
  </el-tree>
</template>

<script setup lang="ts">
  import _ from 'lodash';
  import { useMessage } from '/@/hooks/web/useMessage';
  import modelApi, { Model } from '/@/api/tools/model';
  import { useHttpFetch } from '/@/hooks/fetch';

  interface TreeNode extends Model {
    isLeaf?: boolean;
    children?: TreeNode[];
  }

  interface Props {
    data: Model[];
  }

  const { confirm } = useMessage();
  const deleteModelFetch = useHttpFetch(modelApi.deleteModel);

  const props = defineProps<Props>();
  const emit = defineEmits<{
    (e: 'select', value: Model): void;
    (e: 'edit', value: Model): void;
    (e: 'remove', value: Model): void;
  }>();

  const models = computed<TreeNode[]>(() => {
    const root: TreeNode = {
      id: 'root',
      name: 'root',
      displayName: '所有模型',
      isLeaf: false,
      children: []
    };
    const data = _.groupBy(props.data, (t) => t.group ?? '');

    const keys = _.sortBy(Object.keys(data));
    for (let i = 0; i < keys.length; i++) {
      const group = keys[i];
      if (group != '') {
        const groupNode: TreeNode = {
          id: `root_${group}`,
          name: `root_${group}`,
          isLeaf: false,
          displayName: group,
          children: data[group].map((t) => {
            return { ...t, isLeaf: true };
          }) as TreeNode[]
        };
        root.children.push(groupNode);
      } else {
        const nodes = _.sortBy(data[group]);
        for (let j = 0; j < nodes.length; j++) {
          const node = nodes[j];
          root.children.push({ ...node, isLeaf: true });
        }
      }
    }

    return [root];
  });
  const expandedKeys = ref<string[]>(['root']);
  const selectId = ref<string>('root');
  const selectNodeKey = ref('');

  const onSelect = (model: TreeNode) => {
    if (model.isLeaf && model.id !== selectId.value) {
      selectNodeKey.value = model.id;
      emit('select', model);
    }
    selectId.value = model.id;
    expandedKeys.value = [model.id];
  };
  const onClickEdit = (value: Model) => emit('edit', value);

  const onClickRemove = (model: Model) => {
    confirm(`确认是否删除,"${model.displayName}"!`).then(async () => {
      await deleteModelFetch.execute(model.id);
      emit('remove', model);
      expandedKeys.value = ['root', `root_${model.group ?? '其它'}`];
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
