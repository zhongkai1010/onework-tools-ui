<template>
  <div class="drawer-wrapper">
    <el-drawer :model-value="show" @closed="onClosed" :title="`主题设置`" :size="285">
      <el-form :label-width="`90px`" :label-position="`left`" :model="fromValue">
        <el-form-item label="布局">
          <el-select v-model="fromValue.layout" @change="value => onChange('layout', value)">
            <el-option
              v-for="item in layoutItems"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="菜单宽度">
          <el-select v-model="fromValue.menuWidth" @change="value => onChange('menuWidth', value)">
            <el-option
              v-for="item in menuWidthItems"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="标签">
          <el-switch v-model="fromValue.showTabs" @change="value => onChange('showTabs', value)" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary">保存</el-button>
        <el-button>恢复默认</el-button>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { siteConfigStoreHook } from "/@/store/globalConfig";
import { pageStateStoreHook } from "/@/store/pageState";
import { layoutItems, menuWidthItems } from "/@/layouts/utils";

const show = computed(() => {
  return pageStateStoreHook().showDrawer;
});
const onClosed = () => {
  pageStateStoreHook().setValue("showDrawer", false);
};

const fromValue = computed(() => {
  const store = siteConfigStoreHook();
  return {
    layout: store.layout,
    showTabs: store.showTabs,
    menuWidth: `${store.menuWidth}px`
  };
});

const onChange = (type: string, value: any) => {
  let val: any;
  if (type === "menuWidth") {
    val = parseInt((value as string).replace("px", ""));
  } else {
    val = value;
  }
  siteConfigStoreHook().setValue(type, val);
};
</script>

<style lang="scss" scoped>
.drawer-wrapper {
  &:deep(.el-drawer__header) {
    padding: 20px 20px 0 20px;
    margin-bottom: 0;
  }
  &:deep(.el-drawer__title) {
    font-size: 18px;
  }
  &:deep(.el-form-item__label) {
    display: inline-flex;
    align-items: flex-start;
    font-size: 14px;
    color: #606266;
    height: 32px;
    line-height: 32px;
    font-weight: 100;
  }
}
</style>
