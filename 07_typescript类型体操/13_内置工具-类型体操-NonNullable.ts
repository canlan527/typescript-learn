// NonNullable 不能是空类型 如果联合类型或者属性里有null， undefined，就会移除掉
type NumberType = 'one' | 'two' | 'three' | 'four' | null | undefined | 'null'

type resType = NonNullable<NumberType>

// 实现
type MyNonNullable<T> = T extends null | undefined ? never : T

// 应用
type resType2 = MyNonNullable<NumberType>

export {}