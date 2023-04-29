// 内置工具 - 类型体操
// 1.Partial<Type>
interface IKun {
  name: string,
  age: number,
  slogan?: string
}


// 将IKun里的属性都变可选
type PartialIkun = Partial<IKun>

// 类型体操
// 使用映射类型实现Partial
type MyPartial<T> = {
  // [prop in keyof T]?: T[prop]
  // prop也可以用P代替
  [P in keyof T]?: T[P]
}

// 应用
type ParcialIKun2 = MyPartial<IKun>



export {}
