import { ElMessage, ElMessageBox, ElNotification } from 'element-plus';

export declare type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export declare type MessageType = 'success' | 'info' | 'error' | 'warning';

/**
 * @description: message
 */
export function useMessage() {
  return {
    createMessage: ElMessage,
    notification: ElNotification,
    createConfirm: ElMessageBox.confirm,
    createSuccessModal: ElMessage.success,
    createErrorModal: ElMessage.error,
    createInfoModal: ElMessage.info,
    createWarningModal: ElMessage.warning
  };
}
