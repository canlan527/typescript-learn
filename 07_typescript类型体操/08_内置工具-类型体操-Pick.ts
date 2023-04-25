// 内置工具 - 类型体操
// 2.Pick<Type,Keys> 从 Type 里取出一些keys来形成一个新的类型
interface IKun {
  name: string,
  age?: number,
  slogan?: string
}

type PickIKun = Pick<IKun, 'slogan' | 'name'>

// 类型体操
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 应用
type PickIKun2 = MyPick<IKun, 'slogan' | 'age'>

export {}
