// 使用实现的Exclude实现Omit

interface IKun {
  name: string,
  age?: number,
  slogan?: string
}

type OmitIKun = Omit<IKun, 'slogan' | 'name'>

// 实现MyExclude
type MyExclude<T, K> = T extends K ? never : T

// 实现omit
type MyOmit<T, K> = Pick<T,  MyExclude<keyof T, K>>


// 应用
type NumberType = 'one' | 'two' | 'three' | 'four'

type resExclude = MyExclude<NumberType, 'one'>

type resOmit = MyOmit<IKun, 'slogan'>

// T: 'name' | 'age' | 'slogan',  K: 'slogon'
// P 'name' | 'age'
export {}