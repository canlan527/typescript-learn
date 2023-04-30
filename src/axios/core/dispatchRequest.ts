import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from "../types";
import xhr from "./xhr";
import { buildURL } from "../helpers/url";
import { transformRequest, transformResponse } from "../helpers/data";
import { processHeaders } from "../helpers/headers";

// 作为库的入口文件
export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config);
  // 处理响应结果，所以需要.then()
  return xhr(config).then((res) => {
    return transformResponseData(res);
  });
}

// 处理config
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config);
  config.headers = transformHeaders(config);
  config.data = transformRequestData(config);
}
// 处理config的url和params
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildURL(url!, params); // 非空断言url，在运行时肯定有值
}

// 处理requestbody-data
function transformRequestData(config: AxiosRequestConfig): string {
  return transformRequest(config.data);
}

// 处理Headers
function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config;
  return processHeaders(headers, data);
}

// 处理得到响应的data
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data);
  return res;
}
