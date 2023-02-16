import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { HttpError, HttpRequestConfig, HttpResponse, RequestMethods } from './type';

const defaultConfig: AxiosRequestConfig = {
  baseURL: '',
  timeout: 10000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  // 数组格式参数序列化
  paramsSerializer: (params) => qs.stringify(params, { indices: false })
};

class Request {
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }
  // 初始化配置对象
  private static initConfig: HttpRequestConfig = {};

  // 保存当前Axios实例对象
  private static axiosInstance: AxiosInstance = Axios.create(defaultConfig);

  // 请求拦截
  private httpInterceptorsRequest(): void {
    Request.axiosInstance.interceptors.request.use(
      (config: HttpRequestConfig) => {
        const $config = config;

        return $config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  // 响应拦截
  private httpInterceptorsResponse(): void {
    const instance = Request.axiosInstance;
    instance.interceptors.response.use(
      (response: HttpResponse) => {
        // const $config = response.config;

        return response.data;
      },
      (error: HttpError) => {
        const $error = error;
        $error.isCancelRequest = Axios.isCancel($error);

        return Promise.reject($error);
      }
    );
  }

  // 通用请求工具函数
  public request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: HttpRequestConfig
  ): Promise<T> {
    const config = {
      method,
      url,
      ...param,
      ...axiosConfig
    } as HttpRequestConfig;

    // 单独处理自定义请求/响应回掉
    return new Promise((resolve, reject) => {
      Request.axiosInstance
        .request(config)
        .then((response: undefined) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // 单独抽离的post工具函数
  public post<T, P>(url: string, params?: T, config?: HttpRequestConfig): Promise<P> {
    return this.request<P>('post', url, params, config);
  }

  // 单独抽离的get工具函数
  public get<T, P>(url: string, params?: T, config?: HttpRequestConfig): Promise<P> {
    return this.request<P>('get', url, params, config);
  }
}

export const http = new Request();
