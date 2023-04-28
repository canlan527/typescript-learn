// 某些时候，我们在进行类型比较时，需要使用一个具有具体类型的变量与一个类型进行赋值操作，比如下面这个例子中：
interface Foo {
  name: string,
  age: number
}

interface Bar {
  name: string,
  job: string
}

// let foo: Foo = {
//   name: 'jxz',
//   age: 20
// }

// let bar: Bar = {
//   name: 'wsx',
//   job: 'student'
// }

// foo = bar
// 在“只是想要进行类型比较”的前提下，其实并没有必要真的去声明两个变量，即涉及了值空间的操作。我们完全可以只在类型空间中（你可以理解为用于存放 TypeScript 类型信息的内存空间）比较这些类型，只需要使用 declare 关键字：

declare let foo: Foo;
declare let bar: Bar;

foo = bar

// 我们使用一个值空间存放这个变量具体的属性，一个类型空间存放这个变量的类型。而通过 declare 关键字，我们声明了一个仅在类型空间存在的变量，它在运行时完全不存在，这样就避免了略显繁琐的属性声明

export {}