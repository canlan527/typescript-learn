// 条件类型 基本使用
// someType extends otherType ? AType : BType

type IDType = number | string

type ResType1 = number extends IDType ? true : false
type ResType2 = boolean extends IDType ? true : false

// 函数的重载
function sum(num1: number, num2: number): number  // 重载签名
function sum(num1: string, num2: string): string  // 重载签名

// 重载实现
function sum(num1, num2) {
  return num1+num2
}

// 用什么办法可以一行实现重载签名？
// 错误的方法
function sum2(num1: number | string, num2: number | string): number | string

function sum2(num1, num2) {
  return num1+num2
}

// const res2 = sum2(10, 20)
// const res2 = sum2('hello', 'ts')
// const res2 = sum2('hello', 20)
// const res2 = sum2({}, {})

// 正确的做法
// 使用泛型 
function sum3<T>(num1:T, num2: T): T
function sum3(num1, num2) {
  return num1+num2
}


// const res3 = sum3(10, 20)
// const res3 = sum3('hello', 'ts')
// const res3 = sum3('hello', 20)
// const res3 = sum3({}, {})

// 如果仅仅使用泛型还不够 ，需要加上条件类型判断
function sum4<T>(num1:T, num2: T): T extends number ? number : string
function sum4(num1, num2) {
  return num1+num2
}

// const res4 = sum4(10, 20)
// const res4 = sum4('hello', 'ts')
// const res4 = sum4('hello', 20)
// const res4 = sum4({}, {})

export {}
