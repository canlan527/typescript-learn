import { AxiosRequestConfig } from "./types";
import xhr from "./xhr";
import { buildURL } from "./helpers/url";
import { transformRequest } from './helpers/data';
import { processHeaders } from './helpers/headers';
import { AxiosPromise } from './types';

// 作为库的入口文件
function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config);
  return xhr(config);
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
  return buildURL(url, params);
}

// 处理requestbody-data
function transformRequestData(config: AxiosRequestConfig): string {
  return transformRequest(config.data)
}

// 处理Headers
function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios;
