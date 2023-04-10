// 函数类型
// 1. 函数类型表达式 格式 (参数列表) => 返回值

// 返回值
function foo(): number {
  return 123;
}
// 参数
function bar(num: number) {}

// 带参数和范数值的函数
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

// 函数类型
function demo1(num: number) {
  return 123;
}

const demo2: (num: number) => number = (num: number): number => {
  return 123;
};

type demoFnType = (num: number) => number; // 函数类型表达式
const demo3: demoFnType = (num: number): number => {
  return 123;
};

// 函数类型练习表达式
type calcfnType = (num1: number, num2: number ) => number
function calc(calcfn: calcfnType) {
  const num1 = 10;
  const num2 = 20;
  const res = calcfn(num1, num2);
  console.log(res);
}

function sum2(num1:number, num2:number):number {
  return num1 + num2;
}

function mul(num1:number, num2:number):number {
  return num1 * num2;
}

function foo2(num:number):number {
  return num
}

calc(sum2);
calc(mul);
// 函数类型参数的个数问题： ts对传入的函数类型的参数个数不进行检测
calc(foo2); // 可以接受一个参数



// 使用匿名函数，不需要类型注解，匿名函数自动推导
calc((num1, num2) => {
  return num1 - num2
})


// 调用签名
// 从对象的角度看待这个函数，可以有其他调用赋值等操作
type barType = (num: number) => number;

interface IBar {
  name: string,
  age: number,
  (num: number): number // 调用签名
}

// const bar3: barType = (num: number):number => {
//   return 123
// }

const bar3: IBar = (num: number):number => {
  return 123
}
// 新增bar3.xxx 对象调用
bar3.name = 'aaa'
bar3.age = 26

bar3(444) // 调用


/**
 * 
 * 开发中如何选择：
 * 1. 如果只是描述函数类型本身（函数可以被调用），使用函数类型表达式 (function type expression)
 * 2. 如果在描述函数作为对象可以背调用，同时也有其他属性时，使用函数调用签名（call signature）
 */


export {};
