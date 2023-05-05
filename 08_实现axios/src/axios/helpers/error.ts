import { AxiosRequestConfig, AxiosResponse } from "../types";

export class AxiosError extends Error {
  // 定义成员属性
  isAxiosError: boolean;
  config: AxiosRequestConfig;
  code?: string | null;
  request?: any;
  response?: AxiosResponse;
  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message);
    this.config = config;
    this.code = code;
    this.request = request;
    this.response = response;
    this.isAxiosError = true;

    // 使得继承内置对象Error,调用方法起作用
    Object.setPrototypeOf(this, AxiosError.prototype);
  }
}

// 定义工厂函数供外部使用
export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
) {
  const error = new AxiosError(message, config, code, request, response);
  return error;
}
