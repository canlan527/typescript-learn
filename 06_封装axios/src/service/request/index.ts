import axios from "axios";
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from 'axios'

// 抽离interceptors
interface XNInterceptors {
  requestSuccessFn: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig,
  // requestSuccessFn: (config: AxiosRequestConfig) => AxiosRequestConfig,
  requestFailFn?: (err: any) => any,
  responseSuccessFn: (res: AxiosResponse) => AxiosResponse,
  responseFailFn?: (err: any) => any
}

// 针对AxiosRequestConfig配置进行扩展
interface XNRequestConfig extends AxiosRequestConfig {
  interceptors?: XNInterceptors
}

// 封装request类
// 每次创建request实例都代表创建axios实例，所以需要在constructor里create创建axios
export default class XNRequest {
  instance: AxiosInstance
  constructor(config: XNRequestConfig) {
    this.instance = axios.create(config)

    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use((config) => {
      // 全局请求成功的拦截
      return config
    }, (err) => {
      // 全局请求失败的拦截
      return err;
    })

    this.instance.interceptors.response.use((res) => {
      // 全局响应成功的拦截
      return res;
    }, (err) => {
      // 全局响应失败的拦截
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
  request(config: AxiosRequestConfig){
    return this.instance.request(config)
  }

  get(){}

  post(){}
}