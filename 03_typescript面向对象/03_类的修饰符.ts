// 修饰符 public private protected
// public 修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的;
// private 修饰的是仅在同一类中可见、私有的属性或方法;
// protected 修饰的是仅在类自身及子类中可见、受保护的属性或方法;

// public是默认的修饰符，也是可以直接访问的
class Person1 {
  constructor(public name: string, public age: string) {}
}
class Person2 {
  
  public name: string;
  private age: string;
  protected hobby: string;

  constructor(name: string, age: string, hobby: string) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }

  eat() {
    console.log(this.name + " is eatting~");
  }
  say() {
    console.log("I am " + this.age + " years old");
  }
  like() {
    console.log(`I like ${this.hobby}`)
  }
}

const p = new Person2("jxz", "19", 'reading');
p.eat(); // public的方法、属性 外部可以访问
p.name; // 访问公有属性
// p.age // 无法访问私有属性
p.like()

// 子类
class Stundent extends Person2 {
  private sno: string
  constructor(name:string, age:any,hobby:string, sno: string) {
    super(name, age, hobby)
    this.sno = sno;
  }
  study() {
    console.log(`I love ${this.hobby}`)
  }
}
const s = new Stundent('wsx', '19', 'basketball', 'x0222')

s.study()

export {};
 