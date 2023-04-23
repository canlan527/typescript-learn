import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 抽离interceptors
export interface XNInterceptors {
  requestSuccessFn: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig,
  // requestSuccessFn: (config: AxiosRequestConfig) => AxiosRequestConfig,
  requestFailFn?: (err: any) => any,
  responseSuccessFn: (res: AxiosResponse) => AxiosResponse,
  responseFailFn?: (err: any) => any
}

// 针对AxiosRequestConfig配置进行扩展
export interface XNRequestConfig extends AxiosRequestConfig {
  interceptors?: XNInterceptors
}