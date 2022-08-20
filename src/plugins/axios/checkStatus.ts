import type { ErrorMessageMode } from '/#/axios';
import { useI18n } from '/@/hooks/web/useI18n';
import { useMessage, MessageTypeEnum } from '/@/hooks/web/useMessage';

export function checkStatus(
  status: number,
  msg: string,
  errorMessageMode: ErrorMessageMode = 'message',
): void {
  const { t } = useI18n();
  const { message, confirm } = useMessage();

  let errMessage = '';

  switch (status) {
    case 400:
      errMessage = t('app.api.errMsg400');
      break;
    case 401:
      errMessage = msg || t('app.api.errMsg401');
      break;
    case 403:
      errMessage = t('app.api.errMsg403');
      break;
    // 404请求不存在
    case 404:
      errMessage = t('app.api.errMsg404');
      break;
    case 405:
      errMessage = t('app.api.errMsg405');
      break;
    case 408:
      errMessage = t('app.api.errMsg408');
      break;
    case 500:
      errMessage = t('app.api.errMsg500');
      break;
    case 501:
      errMessage = t('app.api.errMsg501');
      break;
    case 502:
      errMessage = t('app.api.errMsg502');
      break;
    case 503:
      errMessage = t('app.api.errMsg503');
      break;
    case 504:
      errMessage = t('app.api.errMsg504');
      break;
    case 505:
      errMessage = t('app.api.errMsg505');
      break;
    default:
  }

  if (errMessage) {
    if (errorMessageMode === 'modal') {
      confirm(errMessage, { title: t('app.api.errorTip') });
    } else if (errorMessageMode === 'message') {
      message({
        message: errMessage,
        key: `global_error_message_status_${status}`,
        type: MessageTypeEnum.ERROR,
      });
    } else {
      console.log(errMessage);
    }
  }
}
