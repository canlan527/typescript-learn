// 泛型的基本补充

// 1. 可以传入多个泛型
function foo<Type, Element>(a:Type, b:Element) {

}

const res1 = foo(10, 20)
const res2 = foo('hello', 20)
const res3 = foo({name: 'coder'}, ['coder'])



// 2. 平时在开发中我们可能会看到一些常用的名称:
// T:Type的缩写，类型
// K、V:key和value的缩写，键值对
// E:Element的缩写，元素
// O:Object的缩写，对象

export {}