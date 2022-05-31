<template>
  <el-menu class="sidebar-wrapper">
    <template v-for="(item, index) in props.menus">
      <template v-if="item.children != null">
        <el-sub-menu :key="index" :index="index.toString">
          <template #title>
            <el-icon color="#409EFC" class="no-inherit">
              <Share />
            </el-icon>
            <span>{{ item.text }}</span>
          </template>
          <el-menu-item
            v-for="(subItem, subIndex) in item.children"
            :key="subIndex"
            >{{ subItem.text }}</el-menu-item
          >
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :key="index">
          <span>{{ item.text }}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
interface Menu {
  text: String;
  children?: Menu[];
}

const props = defineProps<{
  menus: Menu[];
}>();

console.log(props);
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  width: 210px;
  height: calc(100vh - 50px);
}
</style>
