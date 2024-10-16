// // 抽象类 abstruct
// class Rectangle {
//   constructor(public width: number, public height: number) {
    
//   }

//   getArea() {
//     return this.width * this.height
//   }
// }

// class Circle {
//   constructor(public radius: number) {

//   }

//   getArea() {
//     return Math.floor(this.radius ** 2 * Math.PI);
//   }
// }

// // any类型不合适
// function calcArea(shape:any) {
//   return shape.getArea()
// }

// 方案一：联合类型 缺点：不易于扩展
// function calcArea(shape: Rectangle | Circle | Triangle) {
//   return shape.getArea()
// }

// class Triangle {
//   constructor(public width: number,public height: number ) {
    
//   }

//   getArea() {
//     return Math.floor( (this.width*this.height) / 2 )
//   }
// }
// 方案二：继承,将新增的图形全部继承自shape，这样就可以实现calcArea中参数的类型
// 抽象类不能被实例化
abstract class Shape {
  // getArea 只写声明，不写实现体
  // 让子类自己实现
  // 可以将方法定义为抽象方法，添加关键字 abstract  
  //  - 抽象方法必须出现在抽象类中，因此类也要加入abstract
  //  - 添加了抽象类的函数，子类里必须要将其实现
  abstract getArea()
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super()
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super()
  }

  getArea() {
    return Math.floor(this.radius ** 2 * Math.PI);
  }
}
class Triangle extends Shape {
  constructor(public width: number,public height: number ) {
    super()
  }

  getArea() {
    return Math.floor( (this.width*this.height) / 2 )
  }
}



function calcArea(shape: Shape) {
  return shape.getArea()
}

console.log(calcArea(new Rectangle(100, 200)))
console.log(calcArea(new Circle(10)))
console.log(calcArea(new Triangle(15, 9)))

const shapeA = new Rectangle(100, 200)
const shapeB = new Circle(10)
const shapeC = new Triangle(15, 9)

const shape1:Shape = new Rectangle(100, 300)
// 父类引用指向子类 即为多态

// 错误的使用方式：不报错
calcArea({getArea(){}})


export {}