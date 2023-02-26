import { DictionaryModel } from './model/DictionaryModel';
import { defHttp } from '/@/utils/http/axios';

export enum Api {
  GetAllDictionaries = '/common/getAllDictionary'
}

export default {
  /**
   * 获取选项
   */
  getOptions: () => defHttp.get<DictionaryModel[]>({ url: Api.GetAllDictionaries })
};
