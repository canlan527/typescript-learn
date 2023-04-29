import { isPlainObject } from "./utils";
// 实现对headers的配置
export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, "Content-Type");
  if (isPlainObject(data)) {
    if (headers && !headers["Content-Type"]) {
      headers["Content-Type"] = "application/json;charset=utf-8";
    }
  }
  return headers;
}

// 规范化传入的headers属性
function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return;
  }
  Object.keys(headers).forEach((name) => {
    // 如果传入的属性名，转大写后与当前属性名转大写一致，就用传入的属性名，删除已有同名属性
    if (
      name !== normalizedName &&
      name.toUpperCase() === normalizedName.toUpperCase()
    ) {
      headers[normalizedName] = headers[name];
      delete headers[name];
    }
  });
}

// 将headers字符串解析成对象{key: value}形式
export function parseHeaders(headers: string): any {
  let parsed = Object.create(null); // 创建空对象
  // 如果headers是空数组就返回
  if (!headers) {
    return;
  }
  // 通过换行符和空格符分割出headers每一行
  headers.split("\r\n").forEach((line) => {
    let [key, val] = line.split(":");
    if (!key) {
      return;
    }
    if (val) {
      val = val.trim(); // 去除空格
    } 
    parsed[key] = val; // 组合key: value放进对象
  });

  return parsed;
}
