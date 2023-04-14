// setter / getter
class Person {
  // 私有属性：属性前面使用下划线
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name
    this._age = age;
  }

  run() {
    console.log(`${this.name} is running~`)
  }
  // 通过setter方法来修改私有属性
  set name(value: string) {
    this._name = value
  }
  // getter 返回 this._name
  get name() {
    return this._name;
  }

  set age(value: number) {
    this._age = value < 0 ? 0 : value;
  }
  get age() {
    return this._age
  }
}

const p = new Person('why',19)
console.log(p.name)

p.name = 'jxz'
console.log(p.name)
p.age  = -1
console.log(p.age)



export {}