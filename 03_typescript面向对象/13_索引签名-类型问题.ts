// 一个索引签名的属性类型必须是 string 或者是 number
// 虽然 TypeScript 可以同时支持 string 和 number 类型，但数字索引的返回类型一定要是字符索引返回类型的子类型
interface IIndexType {
  // [nIndex: number]: string// 表示通通过数字索引访问到当前值
  [nIndex: number]: string | number  // 表示通通过数字索引访问到当前值
  [sIndex: string]: any  // 表示通过字符串索引访问到当前值
}

const nums: IIndexType = ['coder', 'whyy','jxz']

// 通过数字类型访问索引时，最终都是转化成string类型来访问
console.log(nums[0])

const info: IIndexType = {
  name: 'coder',
  age: 19
}
console.log(info[0]) // undefined
console.log(info['name']) // 通过字符串索引访问到当前值 coder
const name = info['name'] // name 为any类型

export {}