<template>
  <PageWrapper class="page-container" :interval="false">
    <el-row :span="24">
      <el-col :span="14" class="column-container">
        <el-row :span="24">
          <el-col :span="24" class="welcome-wrapper">
            <img :src="avatarImg" alt="头像" class="avatar" />
            <div class="text">
              <p>钟凯，上午好！欢迎登录临床协调员（CRC）管理系统</p>
              <p>机构老师 | 北京医院</p>
            </div>
            <img :src="welcomeBgImg" />
          </el-col>
          <el-col :span="24">
            <el-card class="nav-wrapper" body-style="height:100%">
              <template #header>
                <div class="card-header">
                  <span>功能入口</span>
                  <el-button type="primary">自定义</el-button>
                </div>
              </template>
              <div class="nav-container">
                <a :span="6" class="nav-item">
                  <img :src="icon1Img" />
                  <span>CRC人员</span>
                </a>
                <a :span="6" class="nav-item">
                  <img :src="icon1Img" />
                  <span>科室分布情况</span>
                </a>
                <a :span="6" class="nav-item">
                  <img :src="icon1Img" />
                  <span>SMO分布情况</span>
                </a>
                <a :span="6" class="nav-item">
                  <img :src="icon1Img" />
                  <span>工作汇报</span>
                </a>
                <a :span="6" class="nav-item">
                  <img :src="icon1Img" />
                  <span>人员交接</span>
                </a>
                <a :span="6" class="nav-item">
                  <img :src="icon1Img" />
                  <span>工作证管理</span>
                </a>
                <a :span="6" class="nav-item">
                  <img :src="icon1Img" />
                  <span>SMO管理</span>
                </a>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10" class="column-container">
        <el-row>
          <el-col :span="24" class="total-wrapper">
            <a class="total-card">
              <div class="title">
                <img :src="totalIconImg" />
                <span>CRC人员</span>
              </div>
              <span class="text"> 360 </span>
            </a>
            <a class="total-card">
              <div class="title">
                <img :src="totalIconImg" />
                <span>合作SMO公司</span>
              </div>
              <span class="text"> 360 </span>
            </a>

            <a class="total-card">
              <div class="title">
                <img :src="totalIconImg" />
                <span>项目总数</span>
              </div>
              <span class="text"> 360 </span>
            </a>
          </el-col>
          <el-col :span="24" class="todo-wrapper">
            <el-card>
              <template #header>
                <div class="card-header">
                  <span>待办事项</span>
                  <el-button :link="true">查看更多>></el-button>
                </div>
              </template>

              <el-tabs type="card" model-value="first">
                <el-tab-pane label="待办事项" name="first">
                  <div class="todo-container">
                    <div class="todo-item">
                      <div class="content">
                        <span class="text"
                          >[方案编号]项目，[公司名称][姓名]发起项目交接，接任人为[公司名称][姓名]，请悉知！</span
                        >
                        <span class="data">XX 提交与 2022/01/02 22:22:33</span>
                      </div>

                      <a class="botton">去处理></a>
                    </div>
                    <div class="todo-item">
                      <div class="content">
                        <span class="text"
                          >[方案编号]项目，[公司名称][姓名]发起项目交接，接任人为[公司名称][姓名]，请悉知！</span
                        >
                        <span class="data">XX 提交与 2022/01/02 22:22:33</span>
                      </div>

                      <a class="botton">去处理></a>
                    </div>
                    <div class="todo-item">
                      <div class="content">
                        <span class="text"
                          >[方案编号]项目，[公司名称][姓名]发起项目交接，接任人为[公司名称][姓名]，请悉知！</span
                        >
                        <span class="data">XX 提交与 2022/01/02 22:22:33</span>
                      </div>

                      <a class="botton">去处理></a>
                    </div>
                    <div class="todo-item">
                      <div class="content">
                        <span class="text"
                          >[方案编号]项目，[公司名称][姓名]发起项目交接，接任人为[公司名称][姓名]，请悉知！</span
                        >
                        <span class="data">XX 提交与 2022/01/02 22:22:33</span>
                      </div>

                      <a class="botton">去处理></a>
                    </div>
                    <div class="todo-item">
                      <div class="content">
                        <span class="text"
                          >[方案编号]项目，[公司名称][姓名]发起项目交接，接任人为[公司名称][姓名]，请悉知！</span
                        >
                        <span class="data">XX 提交与 2022/01/02 22:22:33</span>
                      </div>

                      <a class="botton">去处理></a>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="交接事项" name="second">Config</el-tab-pane>
                <el-tab-pane label="办事预约事项" name="third">Role</el-tab-pane>
              </el-tabs>
            </el-card>
          </el-col>
          <el-col :span="24" class="notice-wrapper">
            <el-card>
              <template #header>
                <div class="card-header">
                  <span>消息通知</span>
                  <el-button :link="true">查看更多>></el-button>
                </div>
              </template>

              <el-tabs type="card" model-value="first">
                <el-tab-pane label="交接通知" name="first">
                  <div class="todo-container">
                    <div class="todo-item">
                      <div class="content">
                        <span class="text"
                          >[方案编号]项目，[公司名称][姓名]发起项目交接，接任人为[公司名称][姓名]，请悉知！</span
                        >
                        <span class="data">XX 提交与 2022/01/02 22:22:33</span>
                      </div>

                      <a class="botton">去处理></a>
                    </div>
                    <div class="todo-item">
                      <div class="content">
                        <span class="text"
                          >[方案编号]项目，[公司名称][姓名]发起项目交接，接任人为[公司名称][姓名]，请悉知！</span
                        >
                        <span class="data">XX 提交与 2022/01/02 22:22:33</span>
                      </div>

                      <a class="botton">去处理></a>
                    </div>
                    <div class="todo-item">
                      <div class="content">
                        <span class="text"
                          >[方案编号]项目，[公司名称][姓名]发起项目交接，接任人为[公司名称][姓名]，请悉知！</span
                        >
                        <span class="data">XX 提交与 2022/01/02 22:22:33</span>
                      </div>

                      <a class="botton">去处理></a>
                    </div>
                    <div class="todo-item">
                      <div class="content">
                        <span class="text"
                          >[方案编号]项目，[公司名称][姓名]发起项目交接，接任人为[公司名称][姓名]，请悉知！</span
                        >
                        <span class="data">XX 提交与 2022/01/02 22:22:33</span>
                      </div>

                      <a class="botton">去处理></a>
                    </div>
                    <div class="todo-item">
                      <div class="content">
                        <span class="text"
                          >[方案编号]项目，[公司名称][姓名]发起项目交接，接任人为[公司名称][姓名]，请悉知！</span
                        >
                        <span class="data">XX 提交与 2022/01/02 22:22:33</span>
                      </div>

                      <a class="botton">去处理></a>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="跨越通知" name="second">Config</el-tab-pane>
                <el-tab-pane label="工作汇报通知" name="third">Role</el-tab-pane>
                <el-tab-pane label="CRC相关资料提醒" name="fourth">Task</el-tab-pane>
                <el-tab-pane label="系统通知" name="fourth">Task</el-tab-pane>
              </el-tabs>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </PageWrapper>
</template>

<script setup lang="ts">
  import avatarImg from '/@/assets/avatar.png';
  import welcomeBgImg from '/@/assets/index-welcome-bg.png';
  import icon1Img from '/@/assets/icon1.png';
  import totalIconImg from '/@/assets/index-total-icon.png';

  import { PageWrapper } from '/@/components/Page/index';
</script>

<style lang="scss" scoped>
  $page-wrapper-padding: 10px;
  $page-radius: 5px;
  $column-container-padding: 5px;
  $wrapper-margin-bottom: 10px;

  $welcome-height: 200px;
  $total-height: 112px;

  $nav-wrapper-height: calc($layout-page-min-height - $welcome-height - $wrapper-margin-bottom * 2);
  $tabs-content-height: calc(
    (
        $layout-page-min-height - $total-height - $page-wrapper-padding * 3 - 78px -
          var(--el-card-padding) * 10
      ) / 2
  );
  .page-container {
    padding: 0px;

    &:deep(.el-card) {
      border-radius: $page-radius;
    }

    & :deep(.el-card__header) {
      padding: 15px;
      font-weight: 600;
    }

    .column-container {
      background-color: #f6f8f9;
      padding: $column-container-padding;

      .welcome-wrapper {
        width: 100%;
        box-shadow: 0px 4px 12px 1px #e6e6e6;
        height: $welcome-height;
        background-image: linear-gradient(to right, #e7f6fc, #ade1f3);
        display: flex;
        margin-bottom: $wrapper-margin-bottom;
        justify-content: space-around;
        align-items: center;
        padding: 0 20px;

        .avatar {
          width: 70px;
          height: 70px;
          margin-right: 20px;
        }

        .text {
          margin-right: auto;
          font-weight: 600;
          font-size: 16px;

          p {
            line-height: 40px;
          }
        }
      }

      .nav-wrapper {
        min-height: $nav-wrapper-height;

        .nav-container {
          display: grid;
          grid: repeat(2, 100px) / auto-flow 25%;

          .nav-item {
            padding: 10px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            box-shadow: 0px 4px 12px 1px #e6e6e6;
            border-radius: 5px;
            margin: 5px;

            img {
              margin-left: 20px;
            }

            span {
              margin-left: 15px;
              font-size: 14px;
              font-weight: 600;
            }
          }
        }
      }

      .total-wrapper {
        display: flex;
        margin-bottom: $wrapper-margin-bottom;

        .total-card {
          width: 33%;
          display: flex;
          flex-direction: column;
          background-color: #fff;
          padding: 15px 25px;
          border-radius: 5px;
          box-shadow: 0px 4px 12px 1px #e6e6e6;
          margin-right: 1%;

          .title {
            display: flex;
            justify-content: flex-start;
            justify-items: center;
            font-size: 14px;
            word-break: keep-all;

            span:first-child {
              margin-right: auto;
            }

            img {
              width: 22px;
              height: 22px;
              margin-right: 5px;
            }
          }

          .text {
            font-size: 40px;
            font-weight: 600;
            text-align: center;
          }
        }

        .total-card:last-child {
          margin-right: 0px;
        }
      }

      .todo-wrapper,
      .notice-wrapper {
        margin-bottom: $wrapper-margin-bottom;

        &:deep(.el-tabs__header) {
          height: 30px;
        }

        &:deep(.el-tabs__nav) {
          border-radius: 0px;
        }

        &:deep(.is-active) {
          color: #fff !important;
        }

        & :deep(.el-tabs__item) {
          height: 30px;
          line-height: 30px;

          &.is-active {
            background-color: var(--el-color-primary);
            color: var(--header-bg-color);
          }
        }

        & :deep(.el-tabs__content) {
          height: $tabs-content-height;
          overflow: auto;
          @include scrollBar;
        }

        .todo-container {
          .todo-item {
            padding: 10px;
            background-color: #fafafb;
            display: flex;
            margin-bottom: 10px;
            border-radius: 5px;
            align-items: center;

            .content {
              width: 85%;
              display: flex;
              flex-direction: column;

              .text {
                width: 90%;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-all;
                white-space: nowrap;
              }

              .data {
                color: #8ea9cf;
              }
            }

            .botton {
              width: 10%;
              color: #58aafe;
              width: 120px;
            }
          }
        }
      }

      .notice-wrapper {
        margin-bottom: 0px;
      }
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
