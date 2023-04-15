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


export {}