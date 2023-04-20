// 泛型约束 generic constrains

// 有时候我们希望传入的类型有某些共性，但是这些共性可能不是在同一种类型中:
// 比如string和array都是有length的，或者某些对象也是会有length属性的;
// 那么只要是拥有length的属性都可以作为我们的参数类型，那么应该如何操作呢?

// 1.getLength 没有必要用泛型
function getLength(arg: { length: number }) {
  return arg.length
}

getLength("hello");
getLength(["coder", "why", "jsz"]);
getLength({ length: 100 });


// 2.获取传入的内容，这个内容必须有length属性
interface ILength {
  length: number
}

function getInfo(arg: ILength) {
  return arg
}

// 这样发现会丢失传入的参数的类型
const info1 = getInfo('hello world')
const info2 = getInfo(['coder', 'why', 'jxz'])
const info3 = getInfo({ length: 100 })

// 修改
// 使用泛型 可以保持传入参数的类型不变
function getInfo2<Type>(arg: Type): Type {
  return arg
}
const info11 = getInfo2('hello world')
const info12 = getInfo2(['coder', 'why', 'jxz'])
const info13 = getInfo2({ length: 100 })

// 类型约束
// 上述可以保证参数的类型不变，但是如果传入的参数没有length的值就会出错，所以需要对参数进行类型约束

// 修改 加入类型约束
// 要求传入的参数具有ILength的特性
function getInfo3<Type extends ILength>(arg: Type): Type {
  return arg
}



export {};
