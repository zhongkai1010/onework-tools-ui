<template>
  <div class="container">
    <el-dropdown @visible-change="onChange" @command="onClickCommand">
      <span class="avatar">
        <el-avatar :src="props.avatar" shape="circle" />
        <span class="username">{{ props.username ?? $t('app.login.notLogin') }}</span>
        <i :class="visibleState ? 'ri-arrow-down-s-line active' : 'ri-arrow-down-s-line'"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item in AVATAR_OPERATE"
            :key="item.command"
            :command="item.command"
          >
            {{ $t(item.text) }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { AVATAR_OPERATE } from '/@/settings/layout';
  import { userStateStoreHook } from '/@/store/modules/userState';
  import { pageStateStoreHook } from '/@/store/modules/pageState';
  import { tabStateStoreHook } from '/@/store/modules/tabState';
  import { permissionStateStoreHook } from '/@/store/modules/permissionState';
  import { log } from '/@/utils/log';
  import { LOGIN_PAGE } from '/@/router/constant';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const visibleState = ref(true);

  const props = defineProps<{
    avatar: string;
    username?: string;
  }>();

  const onChange = (state) => {
    visibleState.value = state;
  };

  const onClickCommand = (command: string) => {
    if (command === 'quit') {
      pageStateStoreHook().setLoading('page', true);
      userStateStoreHook()
        .userLogout()
        .then(() => {
          tabStateStoreHook().clearAll();
          log('clear tabStatee');

          permissionStateStoreHook().clearAll();
          log('clear permission');

          pageStateStoreHook().clearAll();
          log('clear page');

          router.push(LOGIN_PAGE.path);
        })
        .finally(() => {
          pageStateStoreHook().setLoading('page', false);
        });
    }
  };
</script>

<style lang="scss" scoped>
  .container {
    .avatar {
      display: flex;
      align-content: center;
      align-items: center;

      &:deep(.el-avatar) {
        background-color: var(--el-color-white);

        img {
          width: 32px;
          height: 32px;
        }
      }

      &.active {
        transform: rotate(180deg);
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s, color 0.1s,
          font-size 0s;
      }
    }

    .username {
      margin-left: 6px;
      white-space: nowrap;
      height: 40px;
      text-overflow: ellipsis;
      line-height: 40px;
      cursor: pointer;
    }
  }
</style>
