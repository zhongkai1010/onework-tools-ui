<template>
  <page-container>
    <el-card class="card-container">
      <el-button @click="onAddClick">添加</el-button>
      <el-button @click="onRemoveClick">移除</el-button>

      <div class="tab-wrapper">
        <div class="tab-container">
          <el-tabs type="card" :model-value="selectName">
            <el-tab-pane
              v-for="(item, index) in items"
              :key="index"
              :name="item.name"
              :closable="true"
            >
              <template #label>
                <span class="tab-lable">
                  <iconify-icon :icon="item.icon" />
                  <span>{{ item.text }}</span>
                </span>
              </template>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="tool-container">
          <el-dropdown>
            <iconify-icon :icon="`ep:menu`" :size="20" />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-card>
  </page-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import IconifyIcon from "/@/components/OwIcon/src/iconifyIcon.vue";
import { Random as random } from "mockjs";

const items = reactive([
  {
    name: random.string(),
    text: random.string(),
    icon: "ep:tickets"
  }
]);
const selectName = ref(undefined);

const onAddClick = () => {
  const tab = {
    name: random.string(),
    text: random.string(),
    icon: "ep:tickets"
  };
  items.push(tab);
  selectName.value = tab.name;
};
const onRemoveClick = () => {
  items.splice(0, 1);
};
</script>

<style lang="scss" scoped>
.card-container {
  width: 40%;
  height: 280px;
}
.tool-container {
  vertical-align: middle;
}
.tab-wrapper {
  margin-top: 10px;
  display: flex;
  .tab-container {
    width: calc(100% - 45px);
    &:deep(.el-col) {
      margin-bottom: 10px;
    }
    &:deep(.el-tabs__nav) {
      border: 0px;
    }
    &:deep(.el-tabs__item) {
      border: 0px;
      padding: 0 20px;
      margin-right: 5px;
      border-radius: 5px 5px 0px 0px;

      &:hover {
        background-color: #dee1e6;
        color: #515a6e;
      }
      &.is-active {
        color: #1890ff;
        background-color: #e8f4ff;
      }
    }
    .tab-lable {
      .el-icon {
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
        margin-left: 4px;
      }
    }
  }
  .tool-container {
    width: 45px;
    vertical-align: middle;
    margin-top: 12px;
    margin-left: 10px;
    i {
      &:hover {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        -webkit-transition: -webkit-transform 1s linear;
        transition: transform 1s linear;
      }
    }
  }
}
</style>
