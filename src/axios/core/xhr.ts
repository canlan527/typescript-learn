import { parseHeaders } from "../helpers/headers";
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "../types";
import { createError } from '../helpers/error';
// 实现所有的请求逻辑
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { url, method = "GET", data = null, headers, responseType, timeout } = config;

    const request = new XMLHttpRequest(); //新建请求实例
    // 如果传进来responseType就给request对象上也赋值这个属性
    if(responseType) {
      request.responseType = responseType
    }
    // 如果没传timeout默认为0，即没有延迟
    if(timeout) {
      request.timeout = timeout
    }
    
    //  调用open方法:方法名（大写），地址，默认异步
    request.open(method.toUpperCase(), url!, true); // url非空断言，肯定等到执行时url是有值的

    // request的onreadystatechange
    request.onreadystatechange = function handleLoad() {
      if(request.readyState !== 4) { // 4的状态代表可以正确接收到响应结果，不是4就return
        return
      }
      // 当网络错误或超时错误 状态码为0 直接返回
      if(request.status === 0) {
        return
      }
      // 获取request-header
      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
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
      resolve(response)
      // handleResponse(response) // 根据正常\非正常情况做处理
    } 
    // 处理错误情况
    request.onerror = function handleError() {
      reject(createError('Network Error', config, null, request))
    }
    // 处理超时时间
    request.ontimeout = function handleTimeout() {
      reject(createError(`Timeout of ${timeout}ms exceeded`, config, 'ECONNABORTED', request))
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

    // 根据返回状态码做不同处理
    function handleResponse(response: AxiosResponse): void {
      // 如果响应状态码在 200 - 300之间(正常情况)
      if(response.status >= 200 && response.status < 300) {
        resolve(response) // 之后通过promise.then就可以拿到响应对象
      } else {
        reject(createError(`Request failed with statusCode ${response.status}`, config, null, request, response))
      }
    }

  });
}