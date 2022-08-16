import {
  ElMessage,
  ElMessageBox,
  ElMessageBoxOptions,
  ElNotification,
  MessageParams,
  NotificationParams,
} from 'element-plus';
import { AppContext, RendererElement, RendererNode, VNode } from 'vue';

export declare type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export enum MessageType {
  Success = 'success',
  Info = 'info',
  Error = 'error',
  Warning = 'warning',
}

function createMessae(options?: MessageParams, appContext?: AppContext) {
  return ElMessage(options, appContext);
}

function createNotice(options?: NotificationParams) {
  return ElNotification(options);
}

function createAlert(title: string, options?: ElMessageBoxOptions, appContext?: AppContext) {
  return ElMessageBox.alert(title, options, appContext);
}

function createConfirm(
  message:
    | string
    | VNode<
        RendererNode,
        RendererElement,
        {
          [key: string]: any;
        }
      >,
  options?: ElMessageBoxOptions,
  appContext?: AppContext,
) {
  return ElMessageBox.confirm(message, options, appContext);
}

function createPrompt(
  message:
    | string
    | VNode<
        RendererNode,
        RendererElement,
        {
          [key: string]: any;
        }
      >,
  options?: ElMessageBoxOptions,
  appContext?: AppContext,
) {
  return ElMessageBox.prompt(message, options, appContext);
}

/**
 * @description: message
 */
export function useMessage() {
  return {
    message: createMessae,
    notice: createNotice,
    confirm: createConfirm,
    alert: createAlert,
    prompt: createPrompt,
  };
}
