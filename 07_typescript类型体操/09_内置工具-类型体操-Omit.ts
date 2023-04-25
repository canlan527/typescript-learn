// 内置工具 - 类型体操
// 2.Omit<Type,Keys> 过滤排除T中keys属性
interface IKun {
  name: string,
  age?: number,
  slogan?: string
}

type OmitIKun = Omit<IKun, 'slogan' | 'name'>

// 类型体操
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

// 应用
type OmitIKun2 = MyOmit<IKun, 'slogan' | 'age'>

export {}
