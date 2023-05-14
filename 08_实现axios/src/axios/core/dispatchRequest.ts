import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from "../types";
import xhr from "./xhr";
import { buildURL } from "../helpers/url";
// import { transformRequest, transformResponse } from '../helpers/data';
import { processHeaders, flattenHeaders } from '../helpers/headers';
import transform from './transform';
import { isAbsoluteURL, conbineURL } from '../helpers/url';

// 作为库的入口文件
export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  throwIfCancellationRequested(config)//在发送请求前去检测是否有取消请求
  processConfig(config);
  // 处理响应结果，所以需要.then()
  return xhr(config).then((res) => {
    return transformResponseData(res);
  });
}

// 处理config
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config);
  config.data = transform(config.data, config.headers, config.transformRequest)
  config.headers = flattenHeaders(config.headers, config.method!)
}
// 处理config的url和params
export function transformURL(config: AxiosRequestConfig): string {
  let { url, params, paramsSerializer, baseURL } = config;
  if(baseURL && !isAbsoluteURL(url!)) {
    url = conbineURL(baseURL, url)
  }
  return buildURL(url!, params, paramsSerializer); // 非空断言url，在运行时肯定有值
}

// // 处理requestbody-data
// function transformRequestData(config: AxiosRequestConfig): string {
//   return transformRequest(config.data);
// }

// // 处理Headers
// function transformHeaders(config: AxiosRequestConfig): any {
//   const { headers = {}, data } = config;
//   return processHeaders(headers, data);
// }

// 处理得到响应的data
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transform(res.data, res.headers, res.config.transformResponse);
  return res;
}

// 取消请求
function throwIfCancellationRequested(config: AxiosRequestConfig): void {
  if(config.cancelToken) {
    config.cancelToken.throwIfRequested()
  }
}