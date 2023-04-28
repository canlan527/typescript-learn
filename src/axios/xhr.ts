import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "./types";
// 实现所有的请求逻辑
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve) => {
    const { url, method = "GET", data = null, headers, responseType } = config;

    const request = new XMLHttpRequest(); //新建请求实例
    // 如果传进来responseType就给request对象上也赋值这个属性
    if(responseType) {
      request.responseType = responseType
    }

    //  调用open方法:方法名（大写），地址，默认异步
    request.open(method.toUpperCase(), url, true);

    // request的onreadystatechange
    request.onreadystatechange = function handleLoad() {
      if(request.readyState !== 4) { // 4的状态代表可以正确接收到响应结果，不是4就return
        return
      }
      // 获取request-header
      const responseHeaders = request.getAllResponseHeaders()
      // 根据传入的responseType，来决定响应的数据从responseText属性拿还是response属性拿
      // const responseData = responseType === 'text' ? request.responseText : request.response
      const responseData = responseType !== 'text' ? request.response : request.responseText

      // 构造axiosresponse对象
      const response: AxiosResponse = {
        config,
        request,
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
      }
      resolve(response) // 之后通过promise.then就可以拿到响应对象
    } 

    // 处理headers,如果data为空就删除content-type项，否则将传入的headers配置设置进xhr的headers里
    Object.keys(headers).forEach((name) => {
      if (data === null && name.toLowerCase() === "content-type") {
        delete headers[name];
      } else {
        request.setRequestHeader(name, headers[name]);
      }
    });
    // send 发送请求
    request.send(data);
  });
}
