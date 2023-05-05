import { AxiosRequestConfig, AxiosPromise } from '../types/index';
import dispatchRequest from './dispatchRequest';
export default class Axios {
  request(url: any, config?: any): AxiosPromise {
    if(typeof url === 'string') {
      if(!config) {
        config = {}  // 如果没传config，将config设置成空对象
      }
      config.url = url;
    } else {
      config = url
    }
    return dispatchRequest(config)
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

}
