// interface

// 声明对象接口

interface pointType {
  x: number,
  y: number,
  z?: number
}

function pointCorradinate(point: pointType) {
  console.log(point.x, point.y, point.z)
}
pointCorradinate({
  x: 100, 
  y: 100,
  z: 50,
})

// 类型别名和接口非常相似，在定义对象类型时，大部分时候，你可以任意选择使用。
// 接口的几乎所有特性都可以在 type 中使用

// type 和 interface 的区别
// 1.type的使用范围更广, interface只能用来声明对象
type myNumber = number;
type idType = number | string;
type point = {
  x: number,
  y: number,
}
// 2.声明对象是，interface可以多次声明同一个接口名称 , type不允许两个相同名称的别名同时存在
interface PointType1 {
  x: number,
  y: number,
}

interface PointType1 {
  z?: number
}

function printPoint(point: PointType1) {
  console.log(point.x, point.y, point.z)
}

printPoint({x: 200,y: 200, z: 400})


// 3. interface支持继承
interface IPerson {
  name: string,
  age: number
}

interface IKun extends IPerson{
  hobby: string
}

const ikun: IKun = {
  name: 'coby',
  age: 30,
  hobby: 'basketball'
}

// 4.interface可以被类实现(TS面向对象)
// class Person implements IPerson {
//   
// }




// 总结
// 如果是非对象类型的定义使用type，如果是对象类型的声明可以使用 interface
// 如果是简单基本对象的声明，也可以用type声明

export {}