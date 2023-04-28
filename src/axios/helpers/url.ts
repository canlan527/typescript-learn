import { isDate, isObject, isPlainObject } from './utils';
// 存放url相关的辅助函数
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/ig, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/ig, ',')
    .replace(/%20/g, '+') //空格，约定用+表示
    .replace(/%5B/g, '[')
    .replace(/%5D/g, ']')
    
}
export function buildURL(url: string, params?: any) :string {
  // 如果不传oarams就原样返回url
  if(!params) return url;
  const parts: string[] = []
  // 将参数合成数组
  Object.keys(params).forEach((key) => {
    const val = params[key]
    if(val === null || typeof val === 'undefined') {
      return
    }
    let values = []
    if(Array.isArray(val)) {
      values = val;
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach((val) => {
      if(isDate(val)) {
        val = val.toISOString()
      } else if(isPlainObject(val)) {
        val = JSON.stringify(val)
      } 
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  // 序列化参数,用&连接
  let serializedParams = parts.join('&')
  if(serializedParams) {
    const markIndex = url.indexOf('#')
    if(markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') === -1? '?' : '&') + serializedParams
    
  }
  return url
}