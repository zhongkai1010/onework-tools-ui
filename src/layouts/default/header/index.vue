<template>
  <div class="header-container">
    <div class="left">
      <img :src="logoImg" class="logo" />
      <div class="title">临床研究协调员（CRC）管理系统</div>
      <div class="line"></div>
      <div class="site">北京医院</div>
    </div>
    <el-dropdown class="action" @command="onClickDropdownMenu">
      <span>
        <el-avatar :size="50" :src="avatarImg" />
        {{ props.user?.username }}
        <el-icon class="el-icon--right">
          <i-ep-arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="info">个人中心</el-dropdown-item>
          <el-dropdown-item command="quit">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
  import logoImg from '/@/assets/main/logo.png';
  import avatarImg from '/@/assets/avatar.png';
  import { UserInfo } from '/#/store';
  import { useUserStoreWithOut } from '/@/store/modules/user';

  interface Props {
    user: Nullable<UserInfo>;
  }
  const props = defineProps<Props>();
  const userStore = useUserStoreWithOut();
  const onClickDropdownMenu = async (command: string | number | object) => {
    switch (command) {
      case 'info':
        break;
      case 'quit':
        await userStore.logout(true);
        break;
      default:
        break;
    }
  };
</script>

<style lang="scss" scoped>
  .header-container {
    display: flex;
    background-color: #408cff;
    color: #fff;
    padding: 0 30px;

    .left {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-right: auto;
      cursor: pointer;
      .line {
        margin-left: 15px;
        margin-right: 15px;
        width: 0px;
        height: 32px;
        border: 1px solid #7db0ff;
        cursor: pointer;
      }
      .site {
        margin-right: auto;
        font-size: 18px;
      }
      .logo {
      }
      .title {
        margin-left: 5px;
        font-size: 20px;
        font-weight: 600;
      }
    }

    .action {
      .el-avatar {
        margin-right: 5px;
      }
      span {
        color: #fff;
        display: flex;
        align-items: center;
      }
    }
  }
</style>
