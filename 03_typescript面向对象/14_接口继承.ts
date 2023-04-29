// 对象的接口继承
// 接口的继承
/**
 * 1. 减少了相同代码的重复编写
 * 2. 如果使用第三方库，给我们定义了一些属性，
 *    自定义了一个接口，同时希望拥有第三方库里某一个类型的所有属性
 */
interface IPerson {
  name: string,
  age: number,
  eat: () => void
}

interface IKun extends IPerson {
  slogan: string
}

const ikun: IKun = {
  name: 'why',
  age: 19,
  slogan: '🐔你太美',
  eat:() => {}
}

// 作用 接口被类实现
class Person implements IPerson {
 constructor(public name: string, public age: number) {

 }
 eat() {
   
 }
}

export {}