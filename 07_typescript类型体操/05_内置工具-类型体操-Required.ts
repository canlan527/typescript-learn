// 内置工具 - 类型体操
// 2.Required<Type> 让所有属性都变成必选
interface IKun {
  name: string,
  age?: number,
  slogan?: string
}

type RequiredIKun = Required<IKun>

// 类型体操
type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}

// 应用
type RequiredIKun2 = MyRequired<IKun>

export {}
