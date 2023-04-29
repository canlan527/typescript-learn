// 条件类型的类型推导
type fnType = (num: number) => number

const foo: fnType = (num:number) => {
  return num + 100
}

// 
function bar(n: string) {
  return 'hello'
}

// 获取函数的返回值类型
type returnFnType = ReturnType<fnType>
type barFnType = ReturnType<typeof bar>
type fnParamType = Parameters<fnType>
type barParamType = Parameters<typeof bar>

// 实现ReturnType
type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never;

// 应用
type returnFnType2 = MyReturnType<fnType>
type returnBarType2 = MyReturnType<typeof bar>

// 实现Parameters
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer A) => any ? A : any;

// 应用
type barParamType2 = MyParameters<typeof bar>
type fooParamType2 = MyParameters<typeof foo>

type fnTypeParamType = MyParameters<fnType>

export {}