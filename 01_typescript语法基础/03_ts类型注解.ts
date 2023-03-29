// 定义标识符
// var/ let
// 类型注解
let name: string = 'coderwhy'
const age: number = 18
const height: number = 1.88
let message: string = 'hello ts'

let flag: boolean = false
name = 'cobe'
// name = 123 // 提示错误

console.log(name)

// 类型推导

let name2 = 'coder'

// name2 = 23   

// 没有类型注解 下面重新赋值别的类型，会标红
// 声明一个标识符时，如果有直接进行赋值，会根据赋值的类型推导出标识符的类型注解
// 这个过程 称之为类型推导

let age2 = 19

// age2 = '22' 

const height2 = 1.88

//字面量类型
const message2: 'hello' = 'hello'


// let进行类型推导，推导出来的是通用类型
// const 进行类型推导，推导出来的是字面量类型


export {}

