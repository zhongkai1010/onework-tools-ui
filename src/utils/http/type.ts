import { Method, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

export type resultType = {
  accessToken?: string;
};

export type RequestMethods = Extract<
  Method,
  'get' | 'post' | 'put' | 'delete' | 'patch' | 'option' | 'head'
>;

export interface HttpError extends AxiosError {
  isCancelRequest?: boolean;
}

export interface HttpResponse extends AxiosResponse {
  config: HttpRequestConfig;
}

export interface HttpRequestConfig extends AxiosRequestConfig {
  beforeRequestCallback?: (request: HttpRequestConfig) => void;
  beforeResponseCallback?: (response: HttpResponse) => void;
}
