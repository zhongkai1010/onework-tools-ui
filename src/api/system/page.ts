import { TablePageConfig } from '/@/api/model/page';
import { http } from '/@/plugins/axios';

export default {
  getConfig: (params: { name: string }) =>
    http.get<TablePageConfig>({ url: '/api/system/page/getConfig', params }),
};
