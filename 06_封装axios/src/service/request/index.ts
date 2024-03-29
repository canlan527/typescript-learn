import axios from "axios";
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from 'axios'
import { XNRequestConfig } from "./types";


// 封装request类
// 每次创建request实例都代表创建axios实例，所以需要在constructor里create创建axios
export default class XNRequest {
  instance: AxiosInstance
  constructor(config: XNRequestConfig) {
    this.instance = axios.create(config)

    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use((config) => {
      // 全局请求成功的拦截
      console.log('全局请求成功的拦截')
      return config
    }, (err) => {
      // 全局请求失败的拦截
      console.log('全局请求失败的拦截')
      return err;
    })

    this.instance.interceptors.response.use((res) => {
      // 全局响应成功的拦截
      console.log('全局响应成功的拦截')
      return res.data; // 返回res.data
    }, (err) => {
      // 全局响应失败的拦截
      console.log('全局响应失败的拦截')
      return err;
    })

    // 针对特定的XNRequest实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailFn
    )

  }

  // 封装网络请求的方法
  request<T = any>(config: XNRequestConfig<T>){
    // 单次请求的拦截成功处理
    if(config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    // return this.instance.request(config)
    // 单次响应的拦截成功处理
    // 为了更好的让调用接口的时候定义res响应数据类型，Promise要使用泛型
    return new Promise<T>((resolve, reject) => {
      this.instance.request<any, T>(config).then((res) => {
        if(config.interceptors?.responseSuccessFn) {
          res = config.interceptors.responseSuccessFn(res)
        }
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get<T= any>(config: XNRequestConfig<T>){
    return this.request({...config, method: 'GET'})
  }

  post<T = any>(config: XNRequestConfig<T>){
    return this.request({...config, method: 'POST'})
  }

  delete<T = any>(config: XNRequestConfig<T>){
    return this.request({...config, method: 'DELETE'})
  }

  patch<T = any>(config: XNRequestConfig<T>){
    return this.request({...config, method: 'PATCH'})
  }

  put<T = any>(config: XNRequestConfig<T>){
    return this.request({...config, method: 'PUT'})
  }

}