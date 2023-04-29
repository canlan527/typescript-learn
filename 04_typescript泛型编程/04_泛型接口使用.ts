// 泛型 - 接口

// 定义一个接口
interface IPerson<Type> {
  name: Type,
  age: Type,
  slogan: Type,
}

// 使用泛型接口 传递自定义的类型
const person:IPerson<string> = {
  name: 'coder',
  age: '19',
  slogan: 'hello ts'
}

const test: IPerson<number> = {
  name: 1000,
  age: 10,
  slogan: 123
}

// 泛型可以有默认值
interface IKun<Type = string> {
  name: Type,
  age: number,
  slogan: Type
}

const ikun1 = {
  name: 'jxz',
  age: 20,
  slogan: '🐔你太美'
}

export {}