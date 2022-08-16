<template>
  <div class="config-wrapper">
    <ul>
      <li>
        <a style="background-color: #b983ff" @click="onClickConfig">
          <IconifyIcon icon="akar-icons:bell" title="主题配置" />
          <span>主题配置</span>
        </a>
      </li>
      <!-- <li>
        <a style="background-color: #94b3fd">
          <IconifyIcon icon="akar-icons:bell" title="随机换肤" />
          <span>随机换肤</span>
        </a>
      </li>
      <li>
        <a style="background-color: #94daff">
          <IconifyIcon icon="akar-icons:bell" title="源码地址" />
          <span>源码地址</span>
        </a>
      </li>
      <li>
        <a style="background-color: #99feff; color: #94daff">
          <IconifyIcon icon="akar-icons:bell" title="问题反馈" />
          <span>问题反馈</span>
        </a>
      </li> -->
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { pageStateStoreHook } from '/@/store/modules/pageState';
  const pageState = pageStateStoreHook();

  const onClickConfig = () => {
    pageState.$patch({ showDrawer: true });
  };
</script>

<style lang="scss" scoped>
  .config-wrapper {
    position: fixed;
    top: 50%;
    right: 0px;
    border-top-left-radius: 5.5px;
    border-bottom-left-radius: 5.5px;
    box-shadow: 0 0 50px 0 rgb(82 63 105 / 15%);
    transform: translateY(-50%);
    background-color: #fff;
    border: 1px solid #dcdfe6;
    z-index: 3;

    ul {
      display: flex;
      flex-direction: column;

      li {
        padding: 10px;
        list-style: none;
        color: #fff;
        font-size: 12px;

        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 70px;
          height: 60px;
          padding: 10px 5px;
          text-align: center;
          border-radius: 5.5px;

          i {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
</style>
