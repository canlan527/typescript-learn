import { isPlainObject } from './utils';
// 实现对headers的配置
export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  if(isPlainObject(data)) {
    if(headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    } 
  }
  return headers
}

// 规范化传入的headers属性
function normalizeHeaderName(headers: any, normalizedName: string): void {
  if(!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    // 如果传入的属性名，转大写后与当前属性名转大写一致，就用传入的属性名，删除已有同名属性
    if(name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName]= headers[name]
      delete headers[name]
    }
  })
}