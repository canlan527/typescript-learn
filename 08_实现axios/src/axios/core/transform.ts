import { AxiosTransformer } from '../types/index';

export default function transform(data: any, headers: any, fns?: AxiosTransformer | AxiosTransformer[]): any {
  if(!fns) {
    return data;
  }

  // 如果fns不是数组，强制变成数组
  if(!Array.isArray(fns)) {
    fns = [fns]
  }
  // 统一执行遍历逻辑, 每次得到的data会作为下一次fn的参数传递
  fns.forEach(fn => {
    data = fn(data, headers)
  })
  return data;
}