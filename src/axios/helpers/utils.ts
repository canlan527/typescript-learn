// 通用类型判断
const toString = Object.prototype.toString

export function isDate(val: any):val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
// 判断是不是普通对象
export function isPlainObject(val: any) :val is Object {
  return toString.call(val) === '[object Object]'
}

// extend用作拷贝,交叉类型,把 from 拷贝到 to里
export function extend<T, U>(to: T, from: U): T & U {
  for(const key in from) {
    (to as T & U)[key] = from[key] as any
  }
  return to as T & U
}