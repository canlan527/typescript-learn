// 对象类型的修饰符
// 定义对象类型
type IPerson = {
  name?: string,  // ?可选属性
  readonly age: number, // 只读属性
}


interface IKun {
  name: string,
  slogan: string
}


const p: IPerson = {
  name: 'jxz',
  age: 20
}

// p.age = 18  // 无法修改

export {}