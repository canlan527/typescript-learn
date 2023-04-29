// as 断言  类型断言

// 获取dom
let el = document.querySelector('img') // 此时，el的类型let el: HTMLImageElement

let el2 = document.querySelector('div') // let el2: HTMLDivElement

let el3 = document.querySelector('span') // let el3: HTMLSpanElement

// 如果单纯的获取标签，ts可以知道推断出来我们获取的标签类型，从而使用相关属性的时候更加方便
el.src = 'xxx'

// 如果获取类名的话
let classEl = document.querySelector('.img') //let classEl: Element

// 此时，ts无法得知 通过类名拿到的元素的类型，我们使用相关类型属性的时候，需要使用类型缩小才行
// classEl.src = 'sss'  // 报错： 类型“Element”上不存在属性“src”。
// 类型缩小 ！当前5版本的ts无法使用类型缩小来使用src
// if(classEl !== null) {
//   classEl.src = 'sss'
// }

// as

let classEl2 = document.querySelector('.img') as HTMLImageElement;

classEl2.src = 'sss'

// 在工作中可能遇到的问题
// let num: number = 123 as string; // 无法将确切的类型断言成其他确切类型

let str: string = 'coder' as any; // 可以断言成不确切的类型
let foo: any = 1000 as number; // 可以将不确切的类型断言成确定的类型

// 以下做法ts不会报错，但是这么做，执行的时候也会报错
let num: number = 18;
let num2 = num as any;
let num3 = num2 as string;

console.log(num3.split(' ')) // 这样做是可以的







export {}