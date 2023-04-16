// TS中的类 - 具有类型特性
class Person {

}

/**
 * 类的作用
 * 1. 可以创建类对应的实例对象
 * 2. 类本身可以作为实例的类型
 * 3. 类也可以当做一个有构造签名的函数
 */

const p: Person = new Person()

function printPerson(p: Person) {

}


// 构造签名：参数要求传入一个构造函数
function factory(ctor: new () => void) {

}

factory(Person)  // 类可以当做一个有构造签名的函数

export {}