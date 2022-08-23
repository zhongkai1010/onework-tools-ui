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
                <span>{{ element.label }}</span>
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
  import formConfig from '../data/formConfig';
  import { ConfigFormItemProps } from '/@/components/ConfigForm';
  import { buildUUID } from '/@/utils/uuid';
  const activeNames = ref(formConfig[0].name);

  const cloneDog = (item: ConfigFormItemProps) => {
    const newItem = { ...item, id: buildUUID(), name: buildUUID(), span: 6 };
    return newItem;
  };

  const log = (evt) => {
    console.log('-----------change log-------------', evt);
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
