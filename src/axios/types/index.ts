// 类型定义的公共文件
export type Method = 'get' | 'GET'
 | 'post' | 'POST'
 | 'delete' | 'DELETE'
 | 'put' | 'PUT'
 | 'patch' | 'PATCH'
 | 'head' | 'HEAD'
 | 'options' | 'OPTIONS';

export interface AxiosRequestConfig {
  url: string,
  method?: Method,
  data?: any,
  params?: any,
  headers?: any,
  responseType?: XMLHttpRequestResponseType,
  timeout?: number,
}

export interface AxiosResponse {
  data: any,
  status: number,
  statusText: string,
  headers: any,
  config: AxiosRequestConfig,
  request: any,
}

export interface AxiosPromise extends Promise<AxiosResponse> {

}