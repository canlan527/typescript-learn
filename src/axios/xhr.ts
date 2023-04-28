import { AxiosRequestConfig } from "./types";
// 实现所有的请求逻辑
export default function xhr(config: AxiosRequestConfig): void {
  const { url, method = "GET", data = null, headers } = config;

  const request = new XMLHttpRequest(); //新建请求实例
  //  调用open方法:方法名（大写），地址，默认异步
  request.open(method.toLocaleUpperCase(), url, true) 
  // 处理headers,如果data为空就删除content-type项，否则将传入的headers配置设置进xhr的headers里
  Object.keys(headers).forEach(name => {
    if(data === null && name.toLocaleLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })
  // send 发送请求
  request.send(data)
}
