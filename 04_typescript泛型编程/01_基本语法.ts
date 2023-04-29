// 泛型
// 1.类型参数化

function print(arg) {
  return arg
}

print(1234)
print('hello ts')
print({name: 'coder'})

// print函数的参数可能是多元化的，除了使用联合类型(后续如果新增类型就扩展)的行为之外，还可以使用“类型参数化”的方式，
// 即如果当前函数的参数类型，由调用方决定，当前先写一个接收通用类型的类型占位符<Type>

function print2<Type>(arg: Type):Type {
  return arg
}

// 由调用方传递参数的类型
const resp1 = print2<number>(1234)
const resp2 = print2<string>('hello ts')
const resp3 = print2<{name: string}>({name: 'coder'}) 

// 当然大多数时候，泛型可以自己类型推导出来 所以可以不用写
// 省略的写法
const res1 = print2(12345)
const res2 = print2('hello typescript')
const res3 = print2({name: 'coder'})





export {}