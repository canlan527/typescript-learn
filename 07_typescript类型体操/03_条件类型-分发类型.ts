// 条件类型-分发类型
// 写法1：
type toArr<T> = T[];

// 写法2： 只要简单的继承一下，就会将传入的类型挨个过一遍，就可以实现联合类型的传入
type toArray<T> = T extends any ? T[] : never;

type NumberArrType = toArray<number>
// 想要 string[]|number[] 而不是 (string | number)[]
type NumberAndStrArrType  = toArray<number | string>

export {}