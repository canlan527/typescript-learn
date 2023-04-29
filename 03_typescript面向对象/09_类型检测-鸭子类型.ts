// 类型检测 - 鸭子类型
class Person {
  constructor(public name: string, public age: number) {}
}

class Dog{
  constructor(public name: string, public age: number) {
    
  }
}

function printPerson(p: Person) {
  console.log(p.name, p.age)
}


printPerson(new Person('jxz', 19))

// 传入以下参数，没有报错
printPerson({name: 'wxs', age: 18})
printPerson(new Dog('砖头', 5))

// 还有以下现象,错误传递参数也不会报错
const person: Person = new Dog('泥巴', 5)

// ts对类型检测使用鸭子类型
// 鸭子类型：如果一只鸟，走起来像鸭子，游起来像鸭子，看起来像鸭子，那么你可以认为它就是一只鸭子
// 鸭子类型只关心属性和行为，不关心具体是不是对应的类型
// 鸭子类型是一种动态类型检查的概念，它认为一个对象的类型不是由它的类或接口定义的，而是由它的行为决定的。如果一个对象具有与某个类型相同的方法和属性，那么它就可以被视为该类型的实例，即使它并没有显式地声明该类型。

export {}