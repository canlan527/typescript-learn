// Extract<Type, keys> 只包含Type里与keys相同的类型，用于联合类型
type numberType = 'one' | 'two' | 'three' | 'four'

type newType = Extract<numberType, 'one'>

// 实现
type MyExtract<T, K> = T extends K ? T : never

// 应用
type newType2 = MyExtract<numberType, 'one' | 'three'>


export {}