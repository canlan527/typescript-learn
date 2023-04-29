// 类的基本使用
// 栗子
class Person {
  // 成员属性：声明成员属性
  // name: string
  // age: number
  // 也可以声明的时候赋初始值，ts推导出来类型
  name  = ''
  age = 18
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // 方法
  eatting() {
    console.log(this.name + ' eatting')
  }

  runnint() {
    console.log(this.age + ' running')
  }

}

// 如果不想做初始化 变量!: 类型
class Person2 {
  name!: string
  age!: number
}

// 实例化
const p1 = new Person('why', 18)
const p2 = new Person('coby', 20)



export {}

