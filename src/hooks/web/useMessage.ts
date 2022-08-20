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

export declare type MessageType = 'success' | 'info' | 'error' | 'warning';

export enum MessageTypeEnum {
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
}

function createMessae(options?: MessageParams, appContext?: AppContext | MessageType) {
  if (typeof options === 'string') {
    return ElMessage({ message: options, type: appContext as MessageType });
  } else {
    return ElMessage(options, appContext as AppContext);
  }
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
