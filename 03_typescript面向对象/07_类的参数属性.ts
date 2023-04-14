// 类的参数属性

class Person {
  public name: string
  private age: number
  protected height: number

  constructor(name: string, age: number, height: number) {
    this.name = name
    this.age = age
    this.height = height
  }
}
// 
class Person2 {
  constructor(public name: string, private age: number, protected heigth: number) {

  }

}

const p = new Person2('jxz', 19, 1.88)
console.log(p.name) // jxz