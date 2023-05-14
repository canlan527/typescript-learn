import { AxiosRequestConfig, AxiosPromise, AxiosResponse, ResolvedFn, RejectedFn } from '../types/index';
import dispatchRequest from './dispatchRequest';
import InterceptorsManager from './InterceptorsManager';
import mergeConfig from './mergeConfig';
import { transformURL } from './dispatchRequest';


interface Interceptors {
  request: InterceptorsManager<AxiosRequestConfig>
  response: InterceptorsManager<AxiosResponse>
}

interface PromiseChain<T> {
  resolved: ResolvedFn<T> | ((config: AxiosRequestConfig) => AxiosPromise)
  rejected?: RejectedFn
}

export default class Axios {
  defaults: AxiosRequestConfig
  interceptors: Interceptors
  constructor(initConfig: AxiosRequestConfig) {
    this.defaults = initConfig
    this.interceptors = {
      request: new InterceptorsManager<AxiosRequestConfig>(),
      response: new InterceptorsManager<AxiosResponse>()
    }
  }
  request(url: any, config?: any): AxiosPromise {
    if(typeof url === 'string') {
      if(!config) {
        config = {}  // 如果没传config，将config设置成空对象
      }
      config.url = url;
    } else {
      config = url
    }

    // 合并配置
    config = mergeConfig(this.defaults, config)

    // 添加拦截器链式调用，chain变量除了有拦截器还有dispatchRequest
    const chain: PromiseChain<any>[] = [{
      resolved: dispatchRequest,
      rejected: undefined,
    }]
    // 遍历拦截器
    // 请求拦截器，先添加的后执行
    this.interceptors.request.forEach(interceptor => {
      chain.unshift(interceptor)
    })
    // 响应拦截器，先添加的先执行
    this.interceptors.response.forEach(interceptor => {
      chain.push(interceptor)
    })

    // 依次执行chain中的元素
    let promise = Promise.resolve(config)
    while(chain.length) {
      const { resolved, rejected } = chain.shift()!
      promise = promise.then(resolved, rejected)
    }
    
    return promise
  }

  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.request({...config, method: 'get', url})
  }

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.request({...config, method: 'delete', url})
  }

  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.request({...config, method: 'head', url})
  }

  options(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.request({...config, method: 'options', url})
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this.request({...config, method: 'post', url, data})
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this.request({...config, method: 'put', url, data})
  }

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this.request({...config, method: 'patch', url, data})
  }

  getUri(config?: AxiosRequestConfig): string {
    config = mergeConfig(this.defaults, config!)
    return transformURL(config)
  }

}
