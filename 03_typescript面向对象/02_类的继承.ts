// class extends

class Person {
  name: string
  age: number
  constructor(name: string, age:number) {
    this.name = name
    this.age = age
  }

  eat() {
    console.log(this.name+ ' is eatting~')
  }
  run() {
    console.log(this.name+ ' is running')
  }
}

class Student extends Person {
  sno: string
  constructor(name: string, age: number, sno: string) {
    super(name, age)
    this.sno = sno
  }

  study() {
    console.log(this.sno + 'is studying now~')
  }

  eat() {
    console.log('student eatting')
  }

  run() {
    super.run()
    console.log('student running')
  }
}

const jxz = new Student('jxz', 20, 'x-223')
jxz.eat()
jxz.run()

export {}