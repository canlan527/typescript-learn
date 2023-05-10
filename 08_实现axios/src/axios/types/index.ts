// 类型定义的公共文件
export type Method = 'get' | 'GET'
 | 'post' | 'POST'
 | 'delete' | 'DELETE'
 | 'put' | 'PUT'
 | 'patch' | 'PATCH'
 | 'head' | 'HEAD'
 | 'options' | 'OPTIONS';

export interface AxiosRequestConfig {
  url?: string,
  method?: Method,
  data?: any,
  params?: any,
  headers?: any,
  responseType?: XMLHttpRequestResponseType,
  timeout?: number,
  transformRequest?:  AxiosTransformer | AxiosTransformer[],
  transformResponse?: AxiosTransformer | AxiosTransformer[],
  cancelToken?: CancelToken

  [propName: string]: any,
}

export interface AxiosResponse<T = any> {
  data: T,
  status: number,
  statusText: string,
  headers: any,
  config: AxiosRequestConfig,
  request: any,
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {

}

export interface AxiosError extends Error {
  isAxiosError: boolean,
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
}

// 混合对象axios本身是一个函数，我们再实现一个包括属性方法的类，然后把这个类的原型属性和自身属性拷贝到axios上

export interface Axios {
  defaults: AxiosRequestConfig
  interceptors: {
    request: AxiosInterceptorsManager<AxiosRequestConfig>,
    response: AxiosInterceptorsManager<AxiosResponse>
  }
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>
  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
}
// 混合类型的接口
export interface AxiosInstance extends Axios {
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>
  <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
}

// 拦截器管理接口
export interface AxiosInterceptorsManager<T> {
  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number // 返回创建拦截器的id
  eject(id: number): void // 根据id删除拦截器
}
// 定义函数类型，resolve参数由传入者决定，返回传入的类型 或者Promise类型
export interface ResolvedFn<T> {
  (val: T): T | Promise<T>
}

export interface RejectedFn {
  (err: any): any
}

// transformer
export interface AxiosTransformer {
  (data: any, headers?: any): any
}

// 静态方法接口
export interface AxiosStatic extends AxiosInstance {
  create(config?: AxiosRequestConfig): AxiosInstance
}

// 取消请求的接口定义
export interface CancelToken {
  promise: Promise<string>
  reason?: string
}

export interface Canceler {
  (message?: string): void
}

export interface CancelExecutor {
  (cancel: Canceler): void
}