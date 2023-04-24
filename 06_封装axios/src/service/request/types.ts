import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 抽离requestSuccessFn
// type IRequestSucc = InternalAxiosRequestConfig |AxiosRequestConfig 



// 抽离interceptors
export interface XNInterceptors {
  // requestSuccessFn?: (config: any) => any,
  // requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig,
  // requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig,
  requestSuccessFn?: (config: AxiosRequestConfig) => any,
  requestFailFn?: (err: any) => any,
  responseSuccessFn?: (res: AxiosResponse) => AxiosResponse,
  responseFailFn?: (err: any) => any
}

// 针对AxiosRequestConfig配置进行扩展
export interface XNRequestConfig extends AxiosRequestConfig {
// export interface XNRequestConfig extends InternalAxiosRequestConfig {
  interceptors?: XNInterceptors
}