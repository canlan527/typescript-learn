import { isPlainObject } from "./utils";
// 转换body里的参数
export function transformRequest(data: any): any {
  // 将对象转成字符串
  if (isPlainObject(data)) {
    return JSON.stringify(data);
  }
  return data;
}
// 如果data是"{a:'b'}"->转成{a:'b'}
export function transformResponse(data: any): any {
  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch {
      // do nothing
    }
  }
  return data;
}
