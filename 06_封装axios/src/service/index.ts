import { BASE_URL, TIMEOUT } from "./config";
import XNRequest from "./request";

// 统一出口
const xnRequest = new XNRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

export const xnRequest2 = new XNRequest({
  baseURL: 'http://codercba.com:1888/airbnb/api',
  timeout: 8000,
  // 传递拦截器
  interceptors: {
    requestSuccessFn(config) {
      console.log('Airbnb请求成功的回调函数')
      return config;
    },
    requestFailFn(err) {
      console.log('Airbnb请求失败的回调函数')
      console.log(err)
    },
    responseSuccessFn(res) {
      console.log('Airbnb响应成功的回调函数')
      return res
    },
    responseFailFn(err) {
      console.log('Airbnb响应失败的回调函数')
      console.log(err)
    },
  }
})

export default xnRequest