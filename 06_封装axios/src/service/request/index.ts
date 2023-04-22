import axios from "axios";
import type {AxiosInstance, AxiosRequestConfig} from 'axios'
// 封装request类
// 每次创建request实例都代表创建axios实例，所以需要在constructor里create创建axios
export default class XNRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  // 封装网络请求的方法
  request(config: AxiosRequestConfig){
    return this.instance.request(config)
  }

  get(){}

  post(){}
}