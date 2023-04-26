// 除了最常见的 number / string / boolean / null / undefined， 
// ECMAScript 2015（ES6）、2020 (ES11) 又分别引入了 2 个新的原始类型：
// symbol 与 bigint 

const name: string = 'linbudu';
const age: number = 24;
const male: boolean = false;
const undef: undefined = undefined;
const nul: null = null;
const obj: object = { name, age, male };
const bigintVar1: bigint = 9007199254740991n;
const bigintVar2: bigint = BigInt(9007199254740991);
const symbolVar: symbol = Symbol('unique');

// null 与 undefined 在没有开启 strictNullChecks 检查的情况下，会被视作其他类型的子类型

const tmp1: null = null;
const tmp2: undefined = undefined;

// const tmp3: string = null; // 仅在关闭 strictNullChecks 时成立，下同
// const tmp4: string = undefined;

// void
// void 操作符会执行后面跟着的表达式并返回一个 undefined
void function IIFE() {
  console.log('hello ts')
}()
// 能这么做是因为，void 操作符强制将后面的函数声明转化为了表达式，
// void((function iife(){})())。
function func1() {}
function func2() {
  return;
}
function func3() {
  return undefined;
}

// 在这里，func1 与 func2 的返回值类型都会被隐式推导为 void，只有显式返回了 undefined 值的 func3 其返回值类型才被推导为了 undefined。但在实际的代码执行中，func1 与 func2 的返回值均是 undefined。
// 虽然 func3 的返回值类型会被推导为 undefined，但是你仍然可以使用 void 类型进行标注，因为在类型层面 func1、func2、func3 都表示“没有返回一个有意义的值”。

// 你可以认为 void 表示一个空类型，而 null 与 undefined 都是一个具有意义的实际类型
const voidVar1: void = undefined;

const voidVar2: void = null; // 需要关闭 strictNullChecks

// undefined 能够被赋值给 void 类型的变量，就像在 JavaScript 中一个没有返回值的函数会默认返回一个 undefined 。null 类型也可以，但需要在关闭 strictNullChecks 配置的情况下才能成立。


export {}