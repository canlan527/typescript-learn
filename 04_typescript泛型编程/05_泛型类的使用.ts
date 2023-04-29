// 泛型 - 类的使用
class Person<Type = string> {
  constructor(public name: Type, public age: Type) {
    
  }
}

const p1 = new Person('jxz', '20')
console.log(p1.age)

const p2 = new Person<number>(123, 211)
console.log(p2.age)

export {}