// 
class Person {
  name: string
  readonly age: number
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p = new Person('jxz', 18)

console.log(p.name)
p.name = 'wsx'
// p.age = 20  // 只读属性不能修改


export {}