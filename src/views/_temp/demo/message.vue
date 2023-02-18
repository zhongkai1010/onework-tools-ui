<template>
  <page-view class="container">
    <el-row>
      <el-divider content-position="left">Message 消息提示</el-divider>
      <el-button @click="clickMessage('success')" type="success">Success</el-button>
      <el-button @click="clickMessage('info')" type="info">Info</el-button>
      <el-button @click="clickMessage('error')" type="danger">Error</el-button>
      <el-button @click="clickMessage('warning')" type="warning">Warning</el-button>
    </el-row>
    <el-row>
      <el-divider content-position="left">MessageBox Alert 消息弹框</el-divider>
      <el-button @click="clickMessageBox('success', 'alert')" type="success">Success</el-button>
      <el-button @click="clickMessageBox('info', 'alert')" type="info">Info</el-button>
      <el-button @click="clickMessageBox('error', 'alert')" type="danger">Error</el-button>
      <el-button @click="clickMessageBox('warning', 'alert')" type="warning">Warning</el-button>
    </el-row>
    <el-row>
      <el-divider content-position="left">MessageBox Confirm消息弹框</el-divider>
      <el-button @click="clickMessageBox('success', 'confirm')" type="success">Success</el-button>
      <el-button @click="clickMessageBox('info', 'confirm')" type="info">Info</el-button>
      <el-button @click="clickMessageBox('error', 'confirm')" type="danger">Error</el-button>
      <el-button @click="clickMessageBox('warning', 'confirm')" type="warning">Warning</el-button>
    </el-row>
    <el-row>
      <el-divider content-position="left">MessageBox Prompt消息弹框</el-divider>
      <el-button @click="clickMessageBox('success', 'prompt')" type="success">Success</el-button>
      <el-button @click="clickMessageBox('info', 'prompt')" type="info">Info</el-button>
      <el-button @click="clickMessageBox('error', 'prompt')" type="danger">Error</el-button>
      <el-button @click="clickMessageBox('warning', 'prompt')" type="warning">Warning</el-button>
    </el-row>
    <el-row>
      <el-divider content-position="left">Notification 通知</el-divider>
      <el-button @click="clickNotification('success')" type="success">Success</el-button>
      <el-button @click="clickNotification('info')" type="info">Info</el-button>
      <el-button @click="clickNotification('error')" type="danger">Error</el-button>
      <el-button @click="clickNotification('warning')" type="warning">Warning</el-button>
    </el-row>
  </page-view>
</template>

<script setup lang="ts">
  import { useMessage } from '/@/hooks/web/useMessage';
  const { message, notice, alert, confirm, prompt } = useMessage();

  import { MessageType } from '/@/hooks/web/useMessage';

  const clickMessage = (type: MessageType) => {
    message({ message: 'this is a message.', type });
    console.log(type);
  };

  const clickMessageBox = (type: MessageType, model: 'alert' | 'prompt' | 'confirm') => {
    if (model === 'alert') {
      alert('this is alert', { type });
    }
    if (model === 'prompt') {
      prompt('this is a prompt.', {
        type
      })
        .then((value) => {
          message({ message: value, type: 'info' });
        })
        .catch((value) => {
          message({ message: value, type: 'info' });
        });
    }
    if (model === 'confirm') {
      confirm('this is a confirm.', {
        type
      })
        .then(() => {
          message({ message: 'ok', type: 'info' });
        })
        .catch((value) => {
          message({ message: value, type: 'info' });
        });
    }
  };
  const clickNotification = (type: MessageType) => {
    notice({
      title: '通知',
      type,
      message: 'this is a Notification.'
    });
  };
</script>

<style scoped lang="scss">
  .container {
    padding: 20px;
    background-color: #fff;

    .el-row {
      margin-bottom: 20px;
    }
  }
</style>
