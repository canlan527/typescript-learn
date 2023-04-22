declare const jxzName: string
declare const jxzAge: number
declare const jxzHeight: number

declare function foo(arg: string): string

declare class Person {
  name: string
  age: string
  constructor(name, age)
}

declare class Ikun {
  constructor(public slogan: string, public hobby: string)
}

// 声明图片模块文件
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg'

// 声明文件模块 vue
declare module '*.vue' 


// CDN文件声明
declare namespace $ {
  export function ajax(setting:any): any 
}