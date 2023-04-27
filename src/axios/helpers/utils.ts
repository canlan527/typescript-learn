// 通用类型判断
const toString = Object.prototype.toString

export function isDate(val: any):val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  // return toString.call(val) === '[object Object]'
  return val !== null && typeof val === 'object'
}