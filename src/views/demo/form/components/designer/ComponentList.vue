<template>
  <el-card class="component-container">
    <template #header> 组件 </template>
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item
        :title="group.title"
        :name="group.name"
        :key="group.name"
        v-for="group in formConfig"
      >
        <ul class="form-list">
          <draggable
            v-model="group.components"
            item-key="name"
            :clone="cloneDog"
            @change="log"
            :group="{ name: 'component', pull: 'clone', put: false }"
          >
            <template #item="{ element }">
              <li>
                <iconify-icon icon="ant-design:form-outlined" :size="16" />
                <span>{{ element.name }}</span>
              </li>
            </template>
          </draggable>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script setup lang="ts">
  import draggable from 'vuedraggable';
  import formConfig from '/@/views/demo/form/data/formConfig';
  import { DraggableItemConfig } from '/@/views/demo/form/types';

  import { buildUUID } from '/@/utils/uuid';
  import { log } from '/@/utils/log';

  const activeNames = ref(formConfig[0].name);

  const cloneDog = (item: DraggableItemConfig) => {
    const newItem = {
      ...item,
      id: buildUUID(),
      name: buildUUID(),
    } as DraggableItemConfig;

    log('newItem', newItem);
    return newItem;
  };
</script>

<style lang="scss" scoped>
  .component-container {
    width: 280px;
    height: $main-no-margin-height;
    position: fixed;
    &:deep(.el-card__body) {
      height: calc($main-no-margin-height - 65px);
      overflow: auto;
      @include scrollBar;
    }
    .form-list {
      li {
        display: flex;
        justify-content: left;
        align-items: center;
        i {
          margin-right: 5px;
        }
      }
    }

    .el-collapse {
      border-top: 0px;
    }

    :deep(.el-collapse-item__header:last-of-type) {
      border-bottom: 0px;
    }

    .el-collapse-item__content {
      li {
        padding: 10px;
        border: 1px dashed var(--header-font-color);
        margin-bottom: 10px;
        cursor: pointer;
        user-select: none;
      }
    }
  }
</style>
