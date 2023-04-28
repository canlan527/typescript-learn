import { AxiosRequestConfig } from "./types";
import xhr from "./xhr";
import { buildURL } from "./helpers/url";

// 作为库的入口文件
function axios(config: AxiosRequestConfig): void {
  processConfig(config);
  xhr(config);
}

// 处理config
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config);
}
// 处理config的url和params
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildURL(url, params);
}

export default axios;
