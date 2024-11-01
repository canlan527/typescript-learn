// 声明函数的五种方式
// 1. 具名函数
function greet(name: string) {
  return `Hello, ${name}!`;
}
// function greet(name: string): string

// 2. 函数表达式
let greet2 = function(name: string) {
  return `Hello, ${name}!`;
}
// let greet2: (name: string) => string

// 3. 箭头函数表达式
let greet3 = (name: string) => {
  return `Hello, ${name}!`;
}
// let greet3: (name: string) => string
// 4. 箭头函数表达式简写
let greet4 = (name: string) => `Hello, ${name}!`;
// let greet4: (name: string) => string

// 5. 函数构造方法
let greet5 = new Function("name", "return `Hello, ${name}!`");
// let greet5: Function
// Function类型，是一种可调用对象，可以像函数一样调用。而且具有Function.prototype的所有原型方法。但是这里没有提现。
// TypeScript 会袖手旁观，眼看着你做一些在任何地方都不合法的事情。


// 可选和默认的参数
// 可选参数：
function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId || "Not signed in")
}

// log("Page loaded")
// log('User signed in', 'da37373be')

// 默认参数
function log2(message: string, userId: string = "Not signed in") {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId)
}
// log2("Page loaded")
// log2("User signed in", "se87821he")

// 显式类型
type Context = {
  userId?: string
  appId?: string
}
function log3(message: string, context: Context = {}) {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, context.userId)
}
// log3("Page loaded")
// log3("User signed in", {userId: "da37373be", appId: "abc123"})

// 剩余参数
function sum(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0)
}

sum([1, 2, 3, 4, 5]) // 15
// arguments 是一个类数组对象，包含了传递给函数的所有参数。
// 但是它不是真正的数组，需要先转数组再进行操作。

// function badExample() {
//   return Array.from(arguments)
//               .reduce((acc, cur) => acc + cur, 0)
// }

// badExample(1, 2, 3, 4, 5) // 应有 0 个参数，但获得 5 个。
// 虽然可以用 arguments 获得所有参数，但是不建议这么做。无法保证类型安全
// 推荐使用剩余参数，它可以让函数更加灵活。

// 剩余参数 ...
function sum2(...numbers: number[]) :number{
  return numbers.reduce((acc, cur) => acc + cur, 0)
}