// Exclude<Type, keys> 排除Type里包含keys的类型，用于联合类型
type numberType = 'one' | 'two' | 'three' | 'four'

type newType = Exclude<numberType, 'one'>

// 实现
type MyExclude<T, K> = K extends T ? never : T

// 应用
type newType2 = Exclude<numberType, 'one' | 'three'>


export {}