// 内置工具 - 类型体操
// 2.Readonly<Type> 让所有属性都变成必选
interface IKun {
  name: string,
  age?: number,
  slogan?: string
}

type ReadonlyIKun = Readonly<IKun>

// 类型体操
type MyReadonly<T> = {
  readonly[P in keyof T]: T[P]
}

// 应用
type ReadonlyIKun2 = MyReadonly<IKun>

export {}
