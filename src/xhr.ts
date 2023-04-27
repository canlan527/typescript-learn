import { AxiosRequestConfig } from "./types";
// 实现所有的请求逻辑
export default function xhr(config: AxiosRequestConfig): void {
  const { url, method = "GET", data = null } = config;

  const request = new XMLHttpRequest(); //新建请求实例
  //  调用open方法:方法名（大写），地址，默认异步
  request.open(method.toLocaleUpperCase(), url, true) 
  // send 发送请求
  request.send(data)
}
