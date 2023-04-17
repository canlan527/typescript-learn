// TS严格的字面量赋值检测
// 奇怪的现象1：
interface IPerson {
  name: string,
  age: number
}

const info:IPerson = {
  name: 'why',
  age: 19

  // height: 1.88 // 报错
}

const obj = {
  name: 'why',
  age: 19,
  height: 1.88 
}
const info2: IPerson = obj  // 这样就可以

// 奇怪的现象2
function printPerson(person: IPerson) {

}

// printPerson({name: 'why', age: 19, height: 1.88}) // 报错
printPerson(obj) // 可以

// 现象解释：
/**
 * 
 */

// 每个对象字面量最初都被认为是“新鲜的(fresh)”。 -> const info:IPerson = {}
// 对于新鲜的字面量，会进行严格的类型检测，必须完全满足类型的要求（不能有多余的属性）
// 当一个新的对象字面量分配给一个变量或传递给一个非空目标类型的参数时，对象字面量指定目标类型中不存在的属性是错 误的。
// 当类型断言或对象字面量的类型扩大时，新鲜度会消失。
export {}