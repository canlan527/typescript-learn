import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 抽离requestSuccessFn
// type IRequestSucc = InternalAxiosRequestConfig |AxiosRequestConfig 



// 抽离interceptors
export interface XNInterceptors<T = AxiosResponse> {
  // requestSuccessFn?: (config: any) => any,
  // requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig,
  // requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig,
  requestSuccessFn?: (config: AxiosRequestConfig) => any,
  requestFailFn?: (err: any) => any,
  responseSuccessFn?: (res: T) => T,
  responseFailFn?: (err: any) => any
}

// 针对AxiosRequestConfig配置进行扩展
export interface XNRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
// export interface XNRequestConfig extends InternalAxiosRequestConfig {
  interceptors?: XNInterceptors<T>
}